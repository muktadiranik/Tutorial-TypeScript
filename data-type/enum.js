"use strict";
var RequestType;
(function (RequestType) {
    RequestType[RequestType["GET"] = 0] = "GET";
    RequestType[RequestType["POST"] = 1] = "POST";
    RequestType[RequestType["PUT"] = 2] = "PUT";
    RequestType[RequestType["DELETE"] = 3] = "DELETE";
})(RequestType || (RequestType = {}));
console.log(RequestType);
console.log(RequestType.GET);
var RequestTypeValue;
(function (RequestTypeValue) {
    RequestTypeValue["GET"] = "GET";
    RequestTypeValue["POST"] = "POST";
    RequestTypeValue["PUT"] = "PUT";
    RequestTypeValue["DELETE"] = "DELETE";
})(RequestTypeValue || (RequestTypeValue = {}));
console.log(RequestTypeValue);
console.log(RequestTypeValue.GET);
var HeterogeneousEnum;
(function (HeterogeneousEnum) {
    HeterogeneousEnum["GET"] = "GET";
    HeterogeneousEnum[HeterogeneousEnum["POST"] = 1] = "POST";
    HeterogeneousEnum[HeterogeneousEnum["PUT"] = 2] = "PUT";
    HeterogeneousEnum["DELETE"] = "DELETE";
})(HeterogeneousEnum || (HeterogeneousEnum = {}));
console.log(HeterogeneousEnum);
console.log(HeterogeneousEnum.GET);
