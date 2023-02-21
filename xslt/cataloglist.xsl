<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:template match="/">
        <html>
        <head>
        <style>
        ol li {
  background: #ece5e2;
  color: darkred;
  padding: 5px;
  margin-left: 35px;
}
        </style>
        </head>
            <body>
                <h1> My CD collection </h1>
                <ol>
                    <xsl:for-each select="catalog/cd">
                        <li><xsl:value-of select="title"/><xsl:value-of select="artist"/></li>
                    </xsl:for-each>
                </ol>
            </body> 
        </html>  
    </xsl:template>
</xsl:stylesheet>