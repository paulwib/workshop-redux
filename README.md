# Solution: Parameterized Action Creators

Make an action creator that takes an argument and passes it as a property of the action object.

In the reducer handle that action by multiplying the state by the value of the property.

There is a convention called [Flux Standard Actions](https://github.com/acdlite/flux-standard-action) (FSA) which sets some expectations for what a plain action object should look like. It recommends data is sent with the action using the `payload` property.
