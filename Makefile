#
# Code generated by `gkgen`
#

# Environments
-include .makerc

# Service
NAME			= $(shell grep -P -o '(?<=name: )[^\s]+' .config/service.base.yaml)
VERSION			= $(shell grep -P -o '(?<=version: )[^\s]+' .config/service.base.yaml)
DESCRIPTION		= $(shell grep -P -o '(?<=description: )[^\n]+' .config/service.base.yaml)
README			= $(shell grep -P -o '(?<=readme: )[^\s]+' .config/service.base.yaml)
NAMESPACE		?= $(shell grep -P -o '(?<=namespace: )[^\s]+' .config/service.base.yaml)

# Registry
REGISTRY 		?= registry.gitlab.com
REGISTRY_REPO 	?= free-mind/hub
DOCKERFILE 		?= Dockerfile
DEPLOYMENT_KIND	?= $(shell grep -P -o '(?<=kind: )[\w+]+' .config/service.k8s.yaml | tr '[:upper:]' '[:lower:]')
ifeq ($(HELM_NAMESPACE),)
	HELM_NAMESPACE	= $(NAMESPACE)
endif

# OCI
ifndef IMAGE
	ifneq ($(NAMESPACE),)
		IMAGE	= $(NAMESPACE)-$(NAME)
	else
		IMAGE	= $(NAME)
	endif
endif

TAG				?= $(VERSION)

# Lists all targets
help:
	@grep -B1 -E "^[a-zA-Z0-9_-]+\:([^\=]|$$)" Makefile \
		| grep -v -- -- \
		| sed 'N;s/\n/###/' \
		| sed -n 's/^#: \(.*\)###\(.*\):.*/\2###\1/p' \
		| column -t -s '###'

#: Removes untracked files from the working tree
clean:
	git clean -fdx

#: Install hugo module & npm packages
init:
	@# hugo mod get -u
	npm ci

#: Generate chromastyles
syntax:
	@hugo gen chromastyles --style=dracula > assets/scss/components/_syntax.scss

#: Lint the code
lint:
	npm run lint

#: Hugo provides its own webserver which builds and serves the site
run:
	hugo serve --bind 0.0.0.0

#: Build the site
build:
	rm -rf public
	hugo --gc --minify

#: Share site via ngrok
share: build
	npx --yes http-server public/ &
	npx --yes ngrok authtoken 2760UjyRswx9WoJxA1WKbnw2t7Y_2MC5WfbCXHv787ggw93S7
	npx ngrok http 8080

###############################################################################
# OCI
###############################################################################
#: Builds an OCI image using instructions in 'Dockerfile'
oci:
	podman build -t $(IMAGE):$(VERSION) -f $(DOCKERFILE) $(args) \
		--annotation org.opencontainers.image.created="$(shell date -I'seconds')" \
		--annotation org.opencontainers.image.description="$(DESCRIPTION)" \
		--annotation io.artifacthub.package.readme-url="$(README)"

#: Pushes an image to a specified location that defined in '.makerc'
oci-push:
	podman login $(REGISTRY)
	podman push $(IMAGE):$(VERSION) $(REGISTRY)/$(REGISTRY_REPO)/$(IMAGE):$(TAG)

###############################################################################
# Helm
###############################################################################
#: Generates the Helm chart
helm:
	gkgen helm $(args)
	cp .config/service.k8s.yaml .chart/values.yaml
ifneq ($(wildcard .chart/Chart.lock),)
	rm .chart/Chart.lock
endif
	helm dependency build .chart/
	helm lint .chart/

#: Render chart templates locally and write to '.chart/k8s.yaml'
pod: helm
	helm template $(IMAGE) .chart/ > .chart/k8s.yaml

#: Uploads chart to the repo that defined in '.makerc'
package: helm
	helm cm-push .chart/ $(HELM_REPO)

#: Installs the chart to a remote defined in '.makerc'
install:
	helm repo update && helm install $(IMAGE) $(HELM_REPO)/$(IMAGE) -n $(HELM_NAMESPACE) --version $(VERSION) $(args)

#: Upgrades the release to the current version of the chart
upgrade:
	helm repo update && helm upgrade $(IMAGE) $(HELM_REPO)/$(IMAGE) -n $(HELM_NAMESPACE) --version $(VERSION) $(args)

#: Restarts the release
restart:
	kubectl rollout restart $(DEPLOYMENT_KIND)/$(IMAGE) -n $(HELM_NAMESPACE) $(args)

#: Uninstalls the service
uninstall:
	helm uninstall $(IMAGE) -n $(HELM_NAMESPACE) $(args)
