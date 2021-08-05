<!DOCTYPE html>
<html>
  <head>
    <meta http-equiv="content-type" content="text/html; charset=UTF-8">
    <title>include_html.js</title>
  </head>
  <body>
    <p><span class="jscolor" style="box-sizing: inherit; color: black; font-family: Consolas, &quot;courier new&quot;; font-size: 15px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;">f<span
          class="jskeywordcolor" style="box-sizing: inherit; color: mediumblue;">unction</span><span>&nbsp;</span>includeHTML()
        {<br style="box-sizing: inherit;">
        &nbsp;<span>&nbsp;</span><span class="jskeywordcolor" style="box-sizing: inherit; color: mediumblue;">var</span><span>&nbsp;</span>z,
        i, elmnt, file, xhttp;<br style="box-sizing: inherit;">
        &nbsp;<span>&nbsp;</span><span class="jsnumbercolor" style="box-sizing: inherit; color: red;"></span><span
          class="commentcolor" style="box-sizing: inherit; color: green;">/*
          Loop through a collection of all HTML elements: */</span><br style="box-sizing: inherit;">
        &nbsp; z =<span>&nbsp;</span><span class="jsnumbercolor" style="box-sizing: inherit; color: red;"></span>document.<span
          class="jspropertycolor" style="box-sizing: inherit; color: black;">getElementsByTagName</span>(<span
          class="jsstringcolor" style="box-sizing: inherit; color: brown;">"*"</span>);<br
          style="box-sizing: inherit;">
        &nbsp;<span>&nbsp;</span><span class="jskeywordcolor" style="box-sizing: inherit; color: mediumblue;">for</span><span>&nbsp;</span>(i
        =<span>&nbsp;</span><span class="jsnumbercolor" style="box-sizing: inherit; color: red;">0</span>;
        i &lt; z.<span class="jspropertycolor" style="box-sizing: inherit; color: black;">length</span>;
        i++)<span>&nbsp;</span><span class="jsnumbercolor" style="box-sizing: inherit; color: red;"></span>{<br
          style="box-sizing: inherit;">
        &nbsp;&nbsp;&nbsp; elmnt = z[i];<br style="box-sizing: inherit;">
        &nbsp;&nbsp;&nbsp;<span>&nbsp;</span><span class="commentcolor" style="box-sizing: inherit; color: green;">/*search
          for elements with a certain atrribute:*/</span><br style="box-sizing: inherit;">
        &nbsp;&nbsp;&nbsp; file =<span>&nbsp;</span><span class="jsnumbercolor"
          style="box-sizing: inherit; color: red;"></span>elmnt.<span class="jspropertycolor"
          style="box-sizing: inherit; color: black;">getAttribute</span>(<span class="jsstringcolor"
          style="box-sizing: inherit; color: brown;">"w3-include-html"</span>);<br
          style="box-sizing: inherit;">
        &nbsp;&nbsp;&nbsp;<span>&nbsp;</span><span class="jskeywordcolor" style="box-sizing: inherit; color: mediumblue;">if</span><span>&nbsp;</span>(file)
        {<br style="box-sizing: inherit;">
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>&nbsp;</span><span class="jsnumbercolor"
          style="box-sizing: inherit; color: red;"></span><span class="commentcolor"
          style="box-sizing: inherit; color: green;">/* Make an HTTP request
          using the attribute value as the file name: */</span><br style="box-sizing: inherit;">
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>&nbsp;</span><span class="jsnumbercolor"
          style="box-sizing: inherit; color: red;"></span>xhttp =<span>&nbsp;</span><span
          class="jskeywordcolor" style="box-sizing: inherit; color: mediumblue;">new</span><span>&nbsp;</span>XMLHttpRequest();<br
          style="box-sizing: inherit;">
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>&nbsp;</span><span class="jsnumbercolor"
          style="box-sizing: inherit; color: red;"></span>xhttp.<span class="jspropertycolor"
          style="box-sizing: inherit; color: black;">onreadystatechange</span><span>&nbsp;</span>=<span>&nbsp;</span><span
          class="jskeywordcolor" style="box-sizing: inherit; color: mediumblue;">function</span>()
        {<br style="box-sizing: inherit;">
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>&nbsp;</span><span class="jsnumbercolor"
          style="box-sizing: inherit; color: red;"></span><span class="jskeywordcolor"
          style="box-sizing: inherit; color: mediumblue;">if</span><span>&nbsp;</span>(<span
          class="jskeywordcolor" style="box-sizing: inherit; color: mediumblue;">this</span>.<span
          class="jspropertycolor" style="box-sizing: inherit; color: black;">readyState</span><span>&nbsp;</span>==<span>&nbsp;</span><span
          class="jsnumbercolor" style="box-sizing: inherit; color: red;">4</span>)
        {<br style="box-sizing: inherit;">
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>&nbsp;</span><span
          class="jsnumbercolor" style="box-sizing: inherit; color: red;"></span><span
          class="jskeywordcolor" style="box-sizing: inherit; color: mediumblue;">if</span><span>&nbsp;</span>(<span
          class="jskeywordcolor" style="box-sizing: inherit; color: mediumblue;">this</span>.<span
          class="jspropertycolor" style="box-sizing: inherit; color: black;">status</span><span>&nbsp;</span>==<span>&nbsp;</span><span
          class="jsnumbercolor" style="box-sizing: inherit; color: red;">200</span>)
        {elmnt.<span class="jspropertycolor" style="box-sizing: inherit; color: black;">innerHTML</span><span>&nbsp;</span>=<span>&nbsp;</span><span
          class="jskeywordcolor" style="box-sizing: inherit; color: mediumblue;">this</span>.<span
          class="jspropertycolor" style="box-sizing: inherit; color: black;">responseText</span>;}<br
          style="box-sizing: inherit;">
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>&nbsp;</span><span
          class="jsnumbercolor" style="box-sizing: inherit; color: red;"></span><span
          class="jskeywordcolor" style="box-sizing: inherit; color: mediumblue;">if</span><span>&nbsp;</span>(<span
          class="jskeywordcolor" style="box-sizing: inherit; color: mediumblue;">this</span>.<span
          class="jspropertycolor" style="box-sizing: inherit; color: black;">status</span><span>&nbsp;</span>==<span>&nbsp;</span><span
          class="jsnumbercolor" style="box-sizing: inherit; color: red;">404</span>)
        {elmnt.<span class="jspropertycolor" style="box-sizing: inherit; color: black;">innerHTML</span><span>&nbsp;</span>=<span>&nbsp;</span><span
          class="jsstringcolor" style="box-sizing: inherit; color: brown;">"Page
          not found."</span>;}<br style="box-sizing: inherit;">
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>&nbsp;</span><span
          class="jsnumbercolor" style="box-sizing: inherit; color: red;"></span><span
          class="commentcolor" style="box-sizing: inherit; color: green;">/*
          Remove the attribute, and call this function once more: */</span><br style="box-sizing: inherit;">
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>&nbsp;</span><span
          class="jsnumbercolor" style="box-sizing: inherit; color: red;"></span>elmnt.<span
          class="jspropertycolor" style="box-sizing: inherit; color: black;">removeAttribute</span>(<span
          class="jsstringcolor" style="box-sizing: inherit; color: brown;">"w3-include-html"</span>);<br
          style="box-sizing: inherit;">
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>&nbsp;</span><span
          class="jsnumbercolor" style="box-sizing: inherit; color: red;"></span>includeHTML();<br
          style="box-sizing: inherit;">
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; }<br style="box-sizing: inherit;">
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>&nbsp;</span><span class="jsnumbercolor"
          style="box-sizing: inherit; color: red;"></span>}<br style="box-sizing: inherit;">
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; xhttp.<span class="jspropertycolor" style="box-sizing: inherit; color: black;">open</span>(<span
          class="jsstringcolor" style="box-sizing: inherit; color: brown;">"GET"</span>,
        file,<span>&nbsp;</span><span class="jskeywordcolor" style="box-sizing: inherit; color: mediumblue;">true</span>);<br
          style="box-sizing: inherit;">
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>&nbsp;</span><span class="jsnumbercolor"
          style="box-sizing: inherit; color: red;"></span>xhttp.<span class="jspropertycolor"
          style="box-sizing: inherit; color: black;">send</span>();<br style="box-sizing: inherit;">
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>&nbsp;</span><span class="commentcolor"
          style="box-sizing: inherit; color: green;">/* Exit the function: */</span><br
          style="box-sizing: inherit;">
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>&nbsp;</span><span class="jsnumbercolor"
          style="box-sizing: inherit; color: red;"></span><span class="jskeywordcolor"
          style="box-sizing: inherit; color: mediumblue;">return</span>;<br style="box-sizing: inherit;">
        &nbsp;&nbsp;&nbsp; }<br style="box-sizing: inherit;">
        &nbsp; }<br style="box-sizing: inherit;">
        }<br style="box-sizing: inherit;">
      </span><span class="tagnamecolor" style="box-sizing: inherit; color: brown; font-family: Consolas, &quot;courier new&quot;; font-size: 15px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;"><span
          class="tagcolor" style="box-sizing: inherit; color: mediumblue;"></span></span></p>
  </body>
</html>
