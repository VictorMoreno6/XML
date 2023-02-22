<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:template match="/">
        <html>
            <head>
                <style>
                    table,th,td {border: 1px solid white;}
                    tr th{background: yellow}
                    tr td{background: lime}
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
                    <xsl:apply-templates select="food_list/food_item"/>
                </table>
            </body>
        </html>
    </xsl:template>
    <xsl:template match="food_list/food_item">
        <xsl:choose>
            <xsl:when test="@type='vegetable'">
                <tr>
                    <td ><xsl:apply-templates select="name"/></td>
                    <td><xsl:apply-templates select="carbs_per_serving"/></td>
                    <td ><xsl:apply-templates select="fiber_per_serving"/></td>
                    <td ><xsl:apply-templates select="fat_per_serving"/></td>
                    <td ><xsl:apply-templates select="kj_per_serving"/></td>
                </tr>
            </xsl:when>
        </xsl:choose>
    </xsl:template>
    <xsl:template match="name">
        <xsl:value-of select="."/>
    </xsl:template>
    <xsl:template match="carbs_per_serving">
        <xsl:value-of select="."/>
    </xsl:template>
    <xsl:template match="fiber_per_serving">
        <xsl:value-of select="."/>
    </xsl:template>
    <xsl:template match="fat_per_serving">
        <xsl:value-of select="."/>
    </xsl:template>
    <xsl:template match="kj_per_serving">
        <xsl:value-of select="."/>
    </xsl:template>
</xsl:stylesheet>