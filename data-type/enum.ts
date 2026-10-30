enum RequestType {
    GET,
    POST,
    PUT,
    DELETE
}
console.log(RequestType)
console.log(RequestType.GET)


enum RequestTypeValue {
    GET = "GET",
    POST = "POST",
    PUT = "PUT",
    DELETE = "DELETE"
}
console.log(RequestTypeValue)
console.log(RequestTypeValue.GET)


enum HeterogeneousEnum {
    GET = "GET",
    POST = 1,
    PUT = 2,
    DELETE = "DELETE"
}
console.log(HeterogeneousEnum)
console.log(HeterogeneousEnum.GET)
