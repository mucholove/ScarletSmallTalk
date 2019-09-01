smalltalk.bind(smalltalk.Number, unescape("factorial"), "factorial", function Number__factorial(){
const self = this; if ((self._eq((0))).valueOf()) {return (1)};
if ((self._gt((0))).valueOf()) {return self._star(((self._minus((1))).factorial()))};
smalltalk.Prompter.error_("Not valid for negative integers");
return self;
}
, "prompting");
