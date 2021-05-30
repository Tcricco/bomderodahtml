CREATE TABLE IF NOT EXISTS placa (
  codigo INTEGER  NOT NULL  ,
  descricao TEXT    ,
  botao TEXT    ,
  arquivo TEXT      ,
PRIMARY KEY(codigo));



CREATE TABLE IF NOT EXISTS parametro (
  codigo INTEGER  NOT NULL  ,
  nome TEXT    ,
  valor TEXT      ,
PRIMARY KEY(codigo));



