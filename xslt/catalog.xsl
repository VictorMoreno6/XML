<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:template match="/">
<html>
<head>
    <style>
    table,th,td {border: 1px solid;}
    .red{backgroung-color: red}
    .yellow {backgroung-color: yellow}
    .greem{backgroung-color: green}
    </style>
</head>
<body>
    <h1> My CD collection </h1>
    <table>
        <tr>
            <th>Title</th>
            <th>Artist</th>
        </tr>
        <xsl:for-each select="catalog/cd">
        <tr>
            <td><xsl:value-of select="title"/></td>
            <td><xsl:value-of select="artist"/></td>
        </tr>
        <xsl:choose>
            <xsl:when test="price &gt; 10">
                <tr>
                <td class="red"><xsl:value-of select="title"/></td>
                <td class="red"><xsl:value-of select="artist"/></td>
                </tr>
            </xsl:when>
            <xsl:otherwise>
                <tr>
                <td class="green"><xsl:value-of select="title"/></td>
                <td class="green"><xsl:value-of select="title"/></td>
                </tr>
            </xsl:otherwise>
        </xsl:choose>
        </xsl:for-each>
        
    </table>
    
</body>
</html>
</xsl:template>
</xsl:stylesheet>