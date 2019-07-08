###sequelize中文api
https://github.com/demopark/sequelize-docs-Zh-CN/tree/master

###sequelize数据类型
```node
Sequelize.STRING         //字符串,长度默认255,VARCHAR(255)
Sequelize.STRING(1234)  //设定长度的字符串,VARCHAR(1234)
Sequelize.STRING.BINARY   //定义类型VARCHAR BINARY
Sequelize.TEXT           //长字符串,文本 TEXT
Sequelize.TEXT('tiny')   //小文本字符串,TINYTEXT

Sequelize.INTEGER      //int数字,int
Sequelize.BIGINT       //更大的数字,BIGINT
Sequelize.BIGINT(11)   //设定长度的数字,BIGINT(11)

Sequelize.FLOAT        //浮点类型,FLOAT
Sequelize.FLOAT(11)     //设定长度的浮点,FLOAT(11)
Sequelize.FLOAT(11, 12)  //设定长度和小数位数的浮点,FLOAT(11,12)

Sequelize.REAL     //REAL  PostgreSQL only.
Sequelize.REAL(11) // REAL(11)    PostgreSQL only.
Sequelize.REAL(11, 12)  // REAL(11,12) PostgreSQL only.

Sequelize.DOUBLE     // DOUBLE
Sequelize.DOUBLE(11)  // DOUBLE(11)
Sequelize.DOUBLE(11, 12) // DOUBLE(11,12)

Sequelize.DECIMAL     // DECIMAL
Sequelize.DECIMAL(10, 2)  // DECIMAL(10,2)

Sequelize.DATE    // 日期类型,DATETIME for mysql / sqlite, TIMESTAMP WITH TIME ZONE for postgres
Sequelize.DATE(6) // mysql 5.6.4+支持,分秒精度为6位
Sequelize.DATEONLY   // 仅日期部分
Sequelize.BOOLEAN   // int类型,长度为1,TINYINT(1)

Sequelize.ENUM('value 1', 'value 2')  // 枚举类型
Sequelize.ARRAY(Sequelize.TEXT)  //PostgreSQL only.
Sequelize.ARRAY(Sequelize.ENUM)  //  PostgreSQL only.

Sequelize.JSON   // JSON column. PostgreSQL, SQLite and MySQL only.
Sequelize.JSONB  // JSONB column. PostgreSQL only.

Sequelize.BLOB   // BLOB (bytea for PostgreSQL)
Sequelize.BLOB('tiny')  // TINYBLOB (bytea for PostgreSQL. Other options are medium and long)

Sequelize.UUID  // PostgreSQL和SQLite的数据类型是UUID, MySQL是CHAR(36)类型

Sequelize.CIDR  // PostgreSQL中的CIDR类型
Sequelize.INET   // PostgreSQL中的INET类型
Sequelize.MACADDR  // PostgreSQL中的MACADDR类型

Sequelize.RANGE(Sequelize.INTEGER)    //PostgreSQL only.
Sequelize.RANGE(Sequelize.BIGINT)     // PostgreSQL only.
Sequelize.RANGE(Sequelize.DATE)       //PostgreSQL only.
Sequelize.RANGE(Sequelize.DATEONLY)   //PostgreSQL only.
Sequelize.RANGE(Sequelize.DECIMAL)    //PostgreSQL only.

Sequelize.ARRAY(Sequelize.RANGE(Sequelize.DATE)) // PostgreSQL only.

Sequelize.GEOMETRY   //PostgreSQL (with PostGIS) or MySQL only.
Sequelize.GEOMETRY('POINT')  // PostgreSQL (with PostGIS) or MySQL only.
Sequelize.GEOMETRY('POINT', 4326)// PostgreSQL (with PostGIS) or MySQL only.
```