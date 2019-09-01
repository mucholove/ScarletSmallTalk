smalltalk.addClass("Prompter", smalltalk.Object, [], 'Native-UI');
smalltalk.Prompter.$classVariableNames=("");
smalltalk.bind(smalltalk.Prompter.$klass, unescape("info%3A"), "info_", function Prompter_class__info_(message){
var $$primitiveResult = smalltalk.primitiveManager.modules.SKPrompter.primInfo(this, arguments);
if ($$primitiveResult !== smalltalk.primitiveManager.primFailValue)
		return $$primitiveResult;
const self = this; self.primitiveFailed();
return self;
}
, "prompting");
smalltalk.bind(smalltalk.Prompter.$klass, unescape("error%3A"), "error_", function Prompter_class__error_(message){
const self = this; self.info_(message);
return self;
}
, "prompting");
