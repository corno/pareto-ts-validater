import * as pr from "pareto-lang-lib"
import * as f from "../../interface/interfaces/visitor"

export function createDefaultVisistor(): f.IVisitor<string> {
    return {
        "$identifier/*Identifier": ($) => { console.log("$identifier/*Identifier") },
        "$type/?array/*ArrayType": {
            begin: ($) => { console.log("$type/?array/*ArrayType begin") },
            end: ($) => { console.log("$type/?array/*ArrayType end") },
        },
        "$type/?boolean/*BooleanKeyword": ($) => { console.log("$type/?boolean/*BooleanKeyword") },
        "$type/?string/*StringKeyword": ($) => { console.log("$type/?string/*StringKeyword") },
        "$type/?number/*NumberKeyword": ($) => { console.log("$type/?number/*NumberKeyword") },
        "$type/?literalType/*LiteralType/*NullKeyword": ($) => { console.log("$type/?literalType/*LiteralType/*NullKeyword") },
        "$type/?literalType/*LiteralType": {
            begin: ($) => { console.log("$type/?literalType/*LiteralType begin") },
            end: ($) => { console.log("$type/?literalType/*LiteralType end") },
        },
        "$type/?typeLiteral/*TypeLiteral/?index/*IndexSignature/.key/*Parameter/.type/*StringKeyword": ($) => { console.log("$type/?typeLiteral/*TypeLiteral/?index/*IndexSignature/.key/*Parameter/.type/*StringKeyword") },
        "$type/?typeLiteral/*TypeLiteral/?index/*IndexSignature/.key/*Parameter": {
            begin: ($) => { console.log("$type/?typeLiteral/*TypeLiteral/?index/*IndexSignature/.key/*Parameter begin") },
            end: ($) => { console.log("$type/?typeLiteral/*TypeLiteral/?index/*IndexSignature/.key/*Parameter end") },
        },
        "$type/?typeLiteral/*TypeLiteral/?index/*IndexSignature": {
            begin: ($) => { console.log("$type/?typeLiteral/*TypeLiteral/?index/*IndexSignature begin") },
            end: ($) => { console.log("$type/?typeLiteral/*TypeLiteral/?index/*IndexSignature end") },
        },
        "$type/?typeLiteral/*TypeLiteral/?properties/*PropertySignature/.readonly/*ReadonlyKeyword": ($) => { console.log("$type/?typeLiteral/*TypeLiteral/?properties/*PropertySignature/.readonly/*ReadonlyKeyword") },
        "$type/?typeLiteral/*TypeLiteral/?properties/*PropertySignature/.name/*StringLiteral": ($) => { console.log("$type/?typeLiteral/*TypeLiteral/?properties/*PropertySignature/.name/*StringLiteral") },
        "$type/?typeLiteral/*TypeLiteral/?properties/*PropertySignature/.questionToken/*QuestionToken": ($) => { console.log("$type/?typeLiteral/*TypeLiteral/?properties/*PropertySignature/.questionToken/*QuestionToken") },
        "$type/?typeLiteral/*TypeLiteral/?properties/*PropertySignature": {
            begin: ($) => { console.log("$type/?typeLiteral/*TypeLiteral/?properties/*PropertySignature begin") },
            end: ($) => { console.log("$type/?typeLiteral/*TypeLiteral/?properties/*PropertySignature end") },
        },
        "$type/?typeLiteral/*TypeLiteral": {
            begin: ($) => { console.log("$type/?typeLiteral/*TypeLiteral begin") },
            end: ($) => { console.log("$type/?typeLiteral/*TypeLiteral end") },
        },
        "$type/?typeReference/*TypeReference/.referencedType/?qualifiedName/*QualifiedName": {
            begin: ($) => { console.log("$type/?typeReference/*TypeReference/.referencedType/?qualifiedName/*QualifiedName begin") },
            end: ($) => { console.log("$type/?typeReference/*TypeReference/.referencedType/?qualifiedName/*QualifiedName end") },
        },
        "$type/?typeReference/*TypeReference": {
            begin: ($) => { console.log("$type/?typeReference/*TypeReference begin") },
            end: ($) => { console.log("$type/?typeReference/*TypeReference end") },
        },
        "$type/?union/*UnionType/*TupleType/.state/*LiteralType/*StringLiteral": ($) => { console.log("$type/?union/*UnionType/*TupleType/.state/*LiteralType/*StringLiteral") },
        "$type/?union/*UnionType/*TupleType/.state/*LiteralType": {
            begin: ($) => { console.log("$type/?union/*UnionType/*TupleType/.state/*LiteralType begin") },
            end: ($) => { console.log("$type/?union/*UnionType/*TupleType/.state/*LiteralType end") },
        },
        "$type/?union/*UnionType/*TupleType": {
            begin: ($) => { console.log("$type/?union/*UnionType/*TupleType begin") },
            end: ($) => { console.log("$type/?union/*UnionType/*TupleType end") },
        },
        "$type/?union/*UnionType": {
            begin: ($) => { console.log("$type/?union/*UnionType begin") },
            end: ($) => { console.log("$type/?union/*UnionType end") },
        },
        "/.imports/*ImportDeclaration/.clause/*ImportClause/?namespace/*NamespaceImport": {
            begin: ($) => { console.log("/.imports/*ImportDeclaration/.clause/*ImportClause/?namespace/*NamespaceImport begin") },
            end: ($) => { console.log("/.imports/*ImportDeclaration/.clause/*ImportClause/?namespace/*NamespaceImport end") },
        },
        "/.imports/*ImportDeclaration/.clause/*ImportClause/?named/*NamedImports/*ImportSpecifier": {
            begin: ($) => { console.log("/.imports/*ImportDeclaration/.clause/*ImportClause/?named/*NamedImports/*ImportSpecifier begin") },
            end: ($) => { console.log("/.imports/*ImportDeclaration/.clause/*ImportClause/?named/*NamedImports/*ImportSpecifier end") },
        },
        "/.imports/*ImportDeclaration/.clause/*ImportClause/?named/*NamedImports": {
            begin: ($) => { console.log("/.imports/*ImportDeclaration/.clause/*ImportClause/?named/*NamedImports begin") },
            end: ($) => { console.log("/.imports/*ImportDeclaration/.clause/*ImportClause/?named/*NamedImports end") },
        },
        "/.imports/*ImportDeclaration/.clause/*ImportClause": {
            begin: ($) => { console.log("/.imports/*ImportDeclaration/.clause/*ImportClause begin") },
            end: ($) => { console.log("/.imports/*ImportDeclaration/.clause/*ImportClause end") },
        },
        "/.imports/*ImportDeclaration/.file/*StringLiteral": ($) => { console.log("/.imports/*ImportDeclaration/.file/*StringLiteral") },
        "/.imports/*ImportDeclaration": {
            begin: ($) => { console.log("/.imports/*ImportDeclaration begin") },
            end: ($) => { console.log("/.imports/*ImportDeclaration end") },
        },
        "/.globals/*TypeAliasDeclaration/.export/*ExportKeyword": ($) => { console.log("/.globals/*TypeAliasDeclaration/.export/*ExportKeyword") },
        "/.globals/*TypeAliasDeclaration/.typeParameters/*TypeParameter": {
            begin: ($) => { console.log("/.globals/*TypeAliasDeclaration/.typeParameters/*TypeParameter begin") },
            end: ($) => { console.log("/.globals/*TypeAliasDeclaration/.typeParameters/*TypeParameter end") },
        },
        "/.globals/*TypeAliasDeclaration": {
            begin: ($) => { console.log("/.globals/*TypeAliasDeclaration begin") },
            end: ($) => { console.log("/.globals/*TypeAliasDeclaration end") },
        },
        "/.endOfFile/*EndOfFileToken": ($) => { console.log("/.endOfFile/*EndOfFileToken") },
        "": {
            begin: ($) => { console.log(" begin") },
            end: ($) => { console.log(" end") },
        },
    }
}