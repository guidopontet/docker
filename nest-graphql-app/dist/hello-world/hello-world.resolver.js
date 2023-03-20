"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HelloWorldResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
let HelloWorldResolver = class HelloWorldResolver {
    helloWorld() {
        return 'Hola Mundo desde mi contenedor';
    }
    getRandomNumber() {
        return Math.random() * 100;
    }
    getRandomFromZeroTo(to = 6) {
        return Math.floor(Math.random() * to);
    }
};
__decorate([
    (0, graphql_1.Query)(() => String, { description: 'Hola Mundo es lo que retorna', name: 'hello' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], HelloWorldResolver.prototype, "helloWorld", null);
__decorate([
    (0, graphql_1.Query)(() => graphql_1.Float, { name: 'randomNumber' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Number)
], HelloWorldResolver.prototype, "getRandomNumber", null);
__decorate([
    (0, graphql_1.Query)(() => graphql_1.Int, { name: 'randomFromZeroTo', description: 'From zero to argument TO (default 6)' }),
    __param(0, (0, graphql_1.Args)('to', { nullable: true, type: () => graphql_1.Int })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Number)
], HelloWorldResolver.prototype, "getRandomFromZeroTo", null);
HelloWorldResolver = __decorate([
    (0, graphql_1.Resolver)()
], HelloWorldResolver);
exports.HelloWorldResolver = HelloWorldResolver;
//# sourceMappingURL=hello-world.resolver.js.map