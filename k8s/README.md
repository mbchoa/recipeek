# Kubernetes

These are example resource config files to create a deployment for a single Redis Pod and a service to expose the Pod externally.

The service defined here is of type "NodePort". Kubernetes will reserve a random port that exposes the Redis Pod to the outside world.

Run the following commands at the root of the repository to deploy Redis to your cluster:

```bash
kubectl apply -f k8s/redis-deployment.yaml
kubectl apply -f k8s/redis-service.yaml
```

## Accessing Redis service

Run the get command on services to identify the port exposed by the Kubernetes cluster.

The `<EXPOSED_PORT>` will be the port used to connect to the Redis service

```bash
$ kubectl get svc
NAME            TYPE        CLUSTER-IP      EXTERNAL-IP   PORT(S)                   AGE
kubernetes      ClusterIP   10.43.0.1       <none>        443/TCP                   107m
redis-service   NodePort    10.43.206.168   <none>        6379:<EXPOSED_PORT>/TCP   54m
```

Make sure to update the `REACT_APP_REDIS_HOST` and `REACT_APP_REDIS_PORT` environment variables in your environment to allow the React application to connect properly.
