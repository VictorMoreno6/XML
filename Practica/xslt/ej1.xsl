<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:template match="/">
        <html>
            <head>
                <style>
                    table,tr,td {border:1px solid}
                    tr th{
                    background: grey;
                    color: white;
                    }
                </style>
            </head>
            <table>
                <tr>
                    <th>ARTICULO</th>
                    <th>DETALLE</th>
                    <th>PRECIO(sin IVA)</th>
                    <th>ORDEN</th>
                    <th>REFERENCIA</th>
                </tr>
                <xsl:for-each select="//article[@type='t-shirts']">
                    <tr>
                        <td><xsl:value-of select="detail"/></td>
                        <td><xsl:value-of select="price"/></td>
                        <td><xsl:value-of select="command"/></td>
                        <td><xsl:value-of select="reference"/></td>
                    </tr>
                </xsl:for-each>
                <tr>
                    <td colspan="4">Total T-Shirts: <xsl:value-of select="count(//article[@type='t-shirts'])"/></td>
                </tr>
            </table>
            
        </html>
    </xsl:template>
</xsl:stylesheet>