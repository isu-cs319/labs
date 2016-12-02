lexer grammar json;

@lexer::members {
  boolean tag = false;
  boolean value = false;
  String tagName = "";
}

fragment DIGIT: [0123456789];
fragment LETTER: [a-zA-Z];
//fragment ALPHANUM: (DIGIT | LETTER)+;
fragment SPECIAL: [-_~!$&'()*+,;=:];
