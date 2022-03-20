# hugo-theme

Built with Hugo

## TL;DR

```console
$ helm repo add --username <username> --password <password> freemind https://gitlab.com/api/v4/projects/29088262/packages/helm/freemind
$ helm install home freemind/home
```

## Introduction

Freemind home

## Prerequisites

- Kubernetes 1.19+
- Helm 3.2.0+

## Installing

Install the chart using:

```bash
$ helm repo add --username <username> --password <password> freemind https://gitlab.com/api/v4/projects/29088262/packages/helm/freemind
$ helm install home freemind/home
```

These commands deploy `home` on the Kubernetes cluster in the default configuration and with the release name home. The deployment configuration can be customized by specifying the customization parameters with the `helm install` command using the `--values` or `--set` arguments. Find more information in the [configuration section](#configuration) of this document.

> **TIP**: List all releases using `helm list -A`

## Upgrading

Upgrade the chart deployment using:

```bash
$ helm upgrade home freemind/home
```

The command upgrades the existing `home` deployment with the most latest release of the chart.

> **TIP**: Use `helm repo update` to update information on available charts in the chart repositories.

## Uninstalling

To uninstall/delete the `home` deployment:

```bash
helm uninstall home
```

The command removes all the Kubernetes components associated with the chart and deletes the release.

> **TIP**: Specify the `--purge` argument to the above command to remove the release from the store and make its name free for later use.

## Configuration

The following tables lists all the configurable parameters expose by the chart and their default values.

### Common parameters

| Name                | Description                                                                                       | Default |
| ------------------- | ------------------------------------------------------------------------------------------------- | ------- |
| `kubeVersion`       | Override Kubernetes version                                                                       | `""`    |
| `imagePullSecrets`  | Docker registry secret names as an array                                                          | `[]`    |
| `nameOverride`      | Partially override `mpi-operator.fullname` template with a string (will prepend the release name) | `nil`   |
| `fullnameOverride`  | Fully override `mpi-operator.fullname` template with a string                                     | `nil`   |
| `commonAnnotations` | Annotations to add to all deployed objects                                                        | `{}`    |
| `commonLabels`      | Labels to add to all deployed objects                                                             | `{}`    |

### Parameters

| Name                  | Description                                 | Default                                  |
| --------------------- | ------------------------------------------- | ---------------------------------------- |
| `replicaCount`        | Number of replicas                          | `1`                                      |
| `image.repository`    | Image name                                  | `registry.gitlab.com/free-mind/hub/home` |
| `image.tag`           | Image tag                                   | `0.2.2`                                  |
| `image.pullPolicy`    | Image pull policy                           | `IfNotPresent`                           |
| `ingress.enabled`     | Enable ingress controller resource          | `true`                                   |
| `ingress.hostname`    | Default host for the ingress resource       | `freemind.vn`                            |
| `ingress.tls`         | Enable TLS for `ingress.hostname` parameter | ``                                       |
| `ingressGRPC.enabled` | Enable gRPC ingress controller resource     | `false`                                  |
