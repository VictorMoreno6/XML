<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
    <xsl:template match="/">
        <html>
            <body>
                <h2>My CD colllection</h2>
                <ol>
                <xsl:apply-templates select="catalog/cd"/>
                </ol>
            </body>
        </html>
    </xsl:template>
    <xsl:template match="catalog/cd">
    <li>
        <xsl:apply-templates select="title"/>
        <xsl:apply-templates select="artist"/>
    </li>
    </xsl:template>
    <xsl:template match="title">
            <xsl:value-of select="."/>
    </xsl:template>
    <xsl:template match="artist">
            <xsl:value-of select="."/>
    </xsl:template>
</xsl:stylesheet>