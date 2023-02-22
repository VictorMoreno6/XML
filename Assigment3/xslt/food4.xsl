<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:template match="/">
        <html>
            <head>
                <style>
                table,th,td {border: 1px solid white;}
                tr th{background: yellow}
                .g {background: green}
                .p {background: pink}
                </style>
            </head>
            <body>
             <table>
        <tr>
            <th>Food Item</th>
            <th>Carbs (g)</th>
            <th>Fiber (g)</th>
            <th>Fat (g)</th>
            <th>Energy (kj)</th>
        </tr>
        <xsl:for-each select="food_list/food_item">
        <xsl:choose>
            <xsl:when test="@type='vegetable'">
        <tr>
            <td class="g"><xsl:value-of select="name"/></td>
            <td class="g"><xsl:value-of select="carbs_per_serving"/></td>
            <td class="g"><xsl:value-of select="fiber_per_serving"/></td>
            <td class="g"><xsl:value-of select="fat_per_serving"/></td>
            <td class="g"><xsl:value-of select="kj_per_serving"/></td>
        </tr>
        </xsl:when>
        <xsl:when test="@type='fruit'">
        <tr>
            <td class="p"><xsl:value-of select="name"/></td>
            <td class="p"><xsl:value-of select="carbs_per_serving"/></td>
            <td class="p"><xsl:value-of select="fiber_per_serving"/></td>
            <td class="p"><xsl:value-of select="fat_per_serving"/></td>
            <td class="p"><xsl:value-of select="kj_per_serving"/></td>
        </tr>
        </xsl:when>
        </xsl:choose>
    
        </xsl:for-each>
        
    </table>
            </body>
        </html>
    </xsl:template>
</xsl:stylesheet>