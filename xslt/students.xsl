<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:template match="/">
        <html>
        <head>
        <style>
        ul li {
            list-style-type:none;
            margin-left:-35px;
        }
        .green {color: green;}
        .blue {color: blue;}
        .red {color: red;}
        .grey{color:grey}
        .size{font-size:30px;}
        </style>
        </head>
            <body>
                <h1> Students </h1>
                <xsl:for-each select="class/student">
                <ul>
                        <li class="size"><xsl:value-of select="@rollno"/></li>
                        <li>Firts Name:<span class="blue"><xsl:value-of select="firstname"/></span></li>
                        <li>Last Name:<span class="green"><xsl:value-of select="lastname"/></span></li>
                        <li>Nick Name:<span class="red"><xsl:value-of select="nickname"/></span></li>
                        <li>Marks:<span class="grey"><xsl:value-of select="marks"/></span></li>
                </ul>
                    </xsl:for-each>
            </body> 
        </html>  
    </xsl:template>
</xsl:stylesheet>