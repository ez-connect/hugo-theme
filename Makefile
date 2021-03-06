#
# Code generated by `gkgen`
#

.DEFAULT_GOAL := helm

# Git
# gitBranch := $(shell git rev-parse --abbrev-ref HEAD)
# gitCommit := $(shell git rev-parse --short HEAD)

-include .makerc
-include .make.env

init:
	@# hugo mod get -u
	npm ci

syntax:
	@hugo gen chromastyles --style=dracula > assets/scss/components/_syntax.scss

lint:
	npm run lint

run:
	hugo serve --bind 0.0.0.0

build:
	rm -rf public
	hugo --gc --minify

# Share site via ngrok
share: build
	npm run http-server public/ &
	npm run ngrok authtoken 2760UjyRswx9WoJxA1WKbnw2t7Y_2MC5WfbCXHv787ggw93S7
	npm run ngrok http 8080

clean:
	git clean -fdx

###########################################################
# OCI
###########################################################
oci:
	buildah bud -t $(NAME):$(VERSION) $(args)

# Push OCI
oci-push:
ifeq ($(and $(REGISTRY_USERNAME),$(REGISTRY_PWD)),)
	@echo 'User and password are incorrect'
	@exit 1
endif

	buildah login -u $(REGISTRY_USERNAME) -p $(REGISTRY_PWD) $(REGISTRY)
	buildah push $(NAME):$(VERSION) $(REGISTRY)/$(REGISTRY_REPO)/$(NAME):$(VERSION)

###########################################################
# Helm
###########################################################
helm:
	gkgen -k $(args) .
	cp .config/service.k8s.yaml .chart/values.yaml
ifneq ($(wildcard .chart/Chart.lock),)
	rm .chart/Chart.lock
endif
	helm dependency build .chart/
	helm lint .chart/

# Generate template for testing
pod: helm
	helm template $(NAME) .chart/ > .chart/k8s.yaml

# Helm chart
package: helm
ifndef HELM_REPO
	@echo 'Missing "HELM_REPO" in .makerc'
	@exit 1
endif

	helm cm-push .chart/ $(HELM_REPO)

# Helm install
install:
	ssh $(SSH_DESTINATION) '$(HELM_CMD) repo update && $(HELM_CMD) install $(NAME) $(HELM_REPO)/$(NAME) -n $(NAMESPACE) --version $(VERSION)'

# Helm upgrade
upgrade:
	ssh $(SSH_DESTINATION) '$(HELM_CMD) repo update && $(HELM_CMD) upgrade $(NAME) $(HELM_REPO)/$(NAME) -n $(NAMESPACE) --version $(VERSION)'

# Restart deployment
restart:
	@ssh $(SSH_DESTINATION) '$(KUBECTL_CMD) rollout restart $(DEPLOYMENT_KIND)/$(NAME) -n $(NAMESPACE)'

# Helm uninstall
uninstall:
	ssh $(SSH_DESTINATION) '$(HELM_CMD) uninstall $(NAME) -n $(NAMESPACE)'
