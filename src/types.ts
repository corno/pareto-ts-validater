
type Index = { [key: string]: string[] }

export const index: Index = {
  "SourceFile": [
          //"InterfaceDeclaration",
          "FunctionDeclaration",
          //"VariableStatement",
          "EndOfFileToken",
          "ExportDeclaration",
          "ImportDeclaration",
          "TypeAliasDeclaration",
          //"ExpressionStatement"
  ],
  "InterfaceDeclaration": [
          "Identifier",
          "TypeParameter",
          "MethodSignature",
          "PropertySignature",
          "IndexSignature",
          "ConstructSignature",
          "ExportKeyword"
  ],
  "Identifier": [],
  "TypeParameter": [
          "Identifier"
  ],
  "MethodSignature": [
          "Identifier",
          "Parameter",
          "VoidKeyword",
          "TypeParameter",
          "ArrayType",
          "BooleanKeyword",
          "StringKeyword",
          "UnionType",
          "NumberKeyword",
          "TypeReference"
  ],
  "Parameter": [
          "Identifier",
          "TypeReference",
          "FunctionType",
          "NumberKeyword",
          "StringKeyword",
          "ArrayType",
          "AnyKeyword",
          "QuestionToken",
          "NeverKeyword",
          "TypeLiteral",
          "UnionType",
          "BooleanKeyword"
  ],
  "TypeReference": [
          "Identifier",
          "TypeReference",
          "QualifiedName",
          "StringKeyword",
          "LiteralType",
          "TypeLiteral"
  ],
  "VoidKeyword": [],
  "FunctionType": [
          "Parameter",
          "VoidKeyword",
          "TypeReference",
          "AnyKeyword",
          "UnionType",
          "BooleanKeyword",
          "ArrayType",
          "StringKeyword"
  ],
  "NumberKeyword": [],
  "ArrayType": [
          "TypeReference",
          "StringKeyword"
  ],
  "BooleanKeyword": [],
  "PropertySignature": [
          "Identifier",
          "NumberKeyword",
          "ReadonlyKeyword",
          "StringKeyword",
          "FunctionType",
          "TypeReference",
          "QuestionToken",
          "BooleanKeyword",
          "ArrayType",
          "UnionType",
          "LiteralType",
          "TypeLiteral",
          "StringLiteral"
  ],
  "StringKeyword": [],
  "UnionType": [
          "UndefinedKeyword",
          "TypeReference",
          "TupleType",
          "LiteralType",
          "StringKeyword",
          "BooleanKeyword",
          "ArrayType",
          "NumberKeyword",
          "ParenthesizedType"
  ],
  "UndefinedKeyword": [],
  "IndexSignature": [
          "Parameter",
          "TypeReference",
          "ReadonlyKeyword",
          "TypeLiteral",
          "FunctionType"
  ],
  "ReadonlyKeyword": [],
  "FunctionDeclaration": [
          "DeclareKeyword",
          "Identifier",
          "Parameter",
          "BooleanKeyword",
          "TypeParameter",
          "TypeReference",
          "Block",
          "ExportKeyword",
          "VoidKeyword",
          "UnionType",
          "StringKeyword",
          "ArrayType"
  ],
  "DeclareKeyword": [],
  "AnyKeyword": [],
  "ConstructSignature": [
          "Parameter",
          "TypeReference"
  ],
  "QuestionToken": [],
  "VariableStatement": [
          "DeclareKeyword",
          "VariableDeclarationList",
          "ExportKeyword"
  ],
  "VariableDeclarationList": [
          "VariableDeclaration"
  ],
  "VariableDeclaration": [
          "Identifier",
          "TypeReference",
          "NumericLiteral",
          "FalseKeyword",
          "CallExpression",
          "StringLiteral",
          "ArrayType",
          "ArrayLiteralExpression",
          "PropertyAccessExpression",
          "ElementAccessExpression",
          "ArrowFunction",
          "ObjectLiteralExpression",
          "PrefixUnaryExpression",
          "BinaryExpression",
          "ConditionalExpression",
          "NoSubstitutionTemplateLiteral",
          "ParenthesizedExpression",
          "NumberKeyword",
          "UnionType",
          "NullKeyword",
          "TypeLiteral"
  ],
  "EndOfFileToken": [],
  "ExportDeclaration": [
          "StringLiteral"
  ],
  "StringLiteral": [],
  "ImportDeclaration": [
          "ImportClause",
          "StringLiteral"
  ],
  "ImportClause": [
          "NamespaceImport",
          "NamedImports"
  ],
  "NamespaceImport": [
          "Identifier"
  ],
  "NamedImports": [
          "ImportSpecifier"
  ],
  "ImportSpecifier": [
          "Identifier"
  ],
  "NeverKeyword": [],
  "Block": [
          "ThrowStatement",
          "ReturnStatement",
          "VariableStatement",
          "FunctionDeclaration",
          "IfStatement",
          "ExpressionStatement",
          "SwitchStatement",
          "TryStatement",
          "BreakStatement",
          "TypeAliasDeclaration",
          "ForStatement",
          "WhileStatement",
          "LabeledStatement"
  ],
  "ThrowStatement": [
          "NewExpression"
  ],
  "NewExpression": [
          "Identifier",
          "StringLiteral",
          "CallExpression",
          "TemplateExpression",
          "NoSubstitutionTemplateLiteral"
  ],
  "ReturnStatement": [
          "CallExpression",
          "ObjectLiteralExpression",
          "TemplateExpression",
          "Identifier",
          "ArrayLiteralExpression",
          "NullKeyword",
          "ArrowFunction",
          "PropertyAccessExpression",
          "BinaryExpression",
          "PrefixUnaryExpression",
          "ConditionalExpression",
          "ElementAccessExpression",
          "NoSubstitutionTemplateLiteral",
          "StringLiteral"
  ],
  "CallExpression": [
          "Identifier",
          "PropertyAccessExpression",
          "CallExpression",
          "ArrowFunction",
          "ElementAccessExpression",
          "ArrayLiteralExpression",
          "NullKeyword",
          "ObjectLiteralExpression",
          "StringLiteral",
          "BinaryExpression",
          "TypeReference",
          "TemplateExpression",
          "ConditionalExpression",
          "NoSubstitutionTemplateLiteral",
          "ParenthesizedExpression",
          "NumericLiteral",
          "TrueKeyword",
          "FalseKeyword"
  ],
  "ExportKeyword": [],
  "NumericLiteral": [],
  "FalseKeyword": [],
  "IfStatement": [
          "BinaryExpression",
          "Block",
          "Identifier",
          "PropertyAccessExpression",
          "PrefixUnaryExpression",
          "ReturnStatement",
          "CallExpression",
          "IfStatement"
  ],
  "BinaryExpression": [
          "BinaryExpression",
          "Identifier",
          "EqualsEqualsEqualsToken",
          "NumericLiteral",
          "AmpersandAmpersandToken",
          "PlusEqualsToken",
          "MinusEqualsToken",
          "EqualsToken",
          "TrueKeyword",
          "ElementAccessExpression",
          "ExclamationEqualsEqualsToken",
          "StringLiteral",
          "PlusToken",
          "PropertyAccessExpression",
          "NullKeyword",
          "ParenthesizedExpression",
          "ObjectLiteralExpression",
          "MinusToken",
          "GreaterThanToken",
          "CallExpression",
          "FalseKeyword",
          "LessThanToken",
          "BarBarToken",
          "ArrayLiteralExpression"
  ],
  "EqualsEqualsEqualsToken": [],
  "AmpersandAmpersandToken": [],
  "ExpressionStatement": [
          "CallExpression",
          "BinaryExpression",
          "PostfixUnaryExpression"
  ],
  "ObjectLiteralExpression": [
          "PropertyAssignment"
  ],
  "PropertyAssignment": [
          "Identifier",
          "ArrowFunction",
          "PropertyAccessExpression",
          "StringLiteral",
          "ElementAccessExpression",
          "ObjectLiteralExpression",
          "CallExpression",
          "NullKeyword",
          "PrefixUnaryExpression",
          "FalseKeyword",
          "TemplateExpression",
          "TrueKeyword",
          "ConditionalExpression",
          "ArrayLiteralExpression",
          "NoSubstitutionTemplateLiteral",
          "BinaryExpression",
          "ParenthesizedExpression",
          "NumericLiteral"
  ],
  "ArrowFunction": [
          "Parameter",
          "EqualsGreaterThanToken",
          "Block",
          "Identifier",
          "CallExpression",
          "BinaryExpression",
          "StringKeyword",
          "TypeReference",
          "VoidKeyword",
          "UnionType",
          "TemplateExpression",
          "PropertyAccessExpression"
  ],
  "EqualsGreaterThanToken": [],
  "PlusEqualsToken": [],
  "PropertyAccessExpression": [
          "Identifier",
          "CallExpression",
          "PropertyAccessExpression",
          "ElementAccessExpression"
  ],
  "SwitchStatement": [
          "ElementAccessExpression",
          "CaseBlock",
          "Identifier",
          "PropertyAccessExpression"
  ],
  "ElementAccessExpression": [
          "Identifier",
          "NumericLiteral",
          "PropertyAccessExpression",
          "CallExpression",
          "StringLiteral",
          "ElementAccessExpression"
  ],
  "CaseBlock": [
          "CaseClause",
          "DefaultClause"
  ],
  "CaseClause": [
          "StringLiteral",
          "ExpressionStatement",
          "BreakStatement",
          "Block",
          "ReturnStatement",
          "VariableStatement",
          "IfStatement",
          "PropertyAccessExpression"
  ],
  "ArrayLiteralExpression": [
          "StringLiteral",
          "ObjectLiteralExpression",
          "Identifier",
          "PropertyAccessExpression",
          "CallExpression",
          "BinaryExpression",
          "NullKeyword",
          "ConditionalExpression",
          "TemplateExpression",
          "ArrayLiteralExpression",
          "NumericLiteral"
  ],
  "BreakStatement": [
          "Identifier"
  ],
  "DefaultClause": [
          "ExpressionStatement",
          "ReturnStatement",
          "Block"
  ],
  "NullKeyword": [],
  "MinusEqualsToken": [],
  "EqualsToken": [],
  "TrueKeyword": [],
  "TypeAliasDeclaration": [
          "ExportKeyword",
          "Identifier",
          "TypeLiteral",
          "TypeParameter",
          "TupleType",
          "UnionType",
          "ArrayType",
          "TypeReference",
          "FunctionType"
  ],
  "TypeLiteral": [
          "PropertySignature",
          "MethodSignature",
          //"IndexSignature"
  ],
  "ExclamationEqualsEqualsToken": [],
  "TemplateExpression": [
          "TemplateHead",
          "TemplateSpan"
  ],
  "TemplateHead": [],
  "TemplateSpan": [
          "PropertyAccessExpression",
          "TemplateMiddle",
          "TemplateTail",
          "Identifier",
          "CallExpression",
          "ConditionalExpression",
          "ElementAccessExpression",
          "BinaryExpression"
  ],
  "TemplateMiddle": [],
  "TemplateTail": [],
  "TryStatement": [
          "Block",
          "CatchClause"
  ],
  "CatchClause": [
          "VariableDeclaration",
          "Block"
  ],
  "PrefixUnaryExpression": [
          "Identifier",
          "PropertyAccessExpression",
          "CallExpression",
          "NumericLiteral"
  ],
  "TupleType": [
          "OptionalType",
          "LiteralType",
          "StringKeyword",
          "UnionType",
          "TypeReference",
          "TypeLiteral",
          "ArrayType"
  ],
  "OptionalType": [
          "NumberKeyword",
          "TypeReference"
  ],
  "LiteralType": [
          "StringLiteral",
          "NullKeyword"
  ],
  "PlusToken": [],
  "QualifiedName": [
          "Identifier"
  ],
  "ConditionalExpression": [
          "BinaryExpression",
          "QuestionToken",
          "NullKeyword",
          "ColonToken",
          "PropertyAccessExpression",
          "StringLiteral",
          "TemplateExpression",
          "CallExpression",
          "NoSubstitutionTemplateLiteral",
          "ConditionalExpression",
          "Identifier",
          "ObjectLiteralExpression",
          "ArrayLiteralExpression",
          "ElementAccessExpression",
          "ArrowFunction",
          "NumericLiteral"
  ],
  "ColonToken": [],
  "ParenthesizedExpression": [
          "ConditionalExpression",
          "BinaryExpression",
          "ArrowFunction"
  ],
  "NoSubstitutionTemplateLiteral": [],
  "ForStatement": [
          "VariableDeclarationList",
          "BinaryExpression",
          "Block"
  ],
  "PostfixUnaryExpression": [
          "Identifier",
          "PropertyAccessExpression"
  ],
  "MinusToken": [],
  "GreaterThanToken": [],
  "LessThanToken": [],
  "BarBarToken": [],
  "WhileStatement": [
          "TrueKeyword",
          "Block"
  ],
  "LabeledStatement": [
          "Identifier",
          "WhileStatement"
  ],
  "ParenthesizedType": [
          "FunctionType"
  ]
}