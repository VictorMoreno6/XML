<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:template match="/">
        <html>
            <head>
                <style>
                    table,th,td {border:1px solid}
                    tr th{
                    background: grey;
                    color: white;
                    }
                </style>
            </head>
            <body>
                <table>
                    <tr>
                        <th>DETALLE</th>
                        <th>PRECIO(sin IVA)</th>
                        <th>PRECIO(con IVA)</th>
                    </tr>
                    
                    <xsl:for-each select="articles/article">
                        <tr> 
                            <td><xsl:value-of select="detail"/></td>
                            <td><xsl:value-of select="price"/></td>
                            <td><xsl:value-of select="price * 1.21"/></td>
                        </tr>
                    </xsl:for-each>
                    
                </table>
            </body>
        </html>
    </xsl:template>
</xsl:stylesheet>