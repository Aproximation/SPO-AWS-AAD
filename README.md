This code is a part of post about how to make connection from <a href="http://itgoat.pl/sharepoint-online-to-azure-web-service-authenticated-with-aad">Sharepoint Online to Azure Web Service authenticated with Azure Active Directory</a>.
Please read it in order to get the context of this code.

<h2>Preparation</h2>
To test this code you need to have:
<ul><li>Access to Sharepoint Online<br>
    However any kind of server that can host HTML+JS code will work 
    Please remember that to properly reproduce behaviour described in mentioned blog post it should be on different domain than web service.</li>
  <li>Azure subscription<br>
    Required for hosting web service. It should also have active directory for providing desired authentication config.</li>
</ul>
<h2>Projects</h2>
  Solution consists of 2 projects:
  <ul>
   <li>Web Service<br>it's simple ASP.NET WEB API that you deploy on Azure</li>
   <li>Sharepoint App (Add-On)<br>Sharepoint App that you can deploy on SPO in order to test client <-> web service communication.
   If you want you can just install app as a sandbox solution (I write about it in <a href="http://itgoat.pl/developing-sharepoint-without-sharepoint-installed/">this post</a> in section: "Create Sharepoint Add-in").
   Alternatively you can also just take files from solution and upload it manually (remember to change reference paths inside files).</li>
   </ul>
<h2>Deployment</h2>
   To properly deploy solution you need to:
   <ul>
   <li>In ClientPart/Scripts/ClientPart.js file:
   <ul>
      <li>In CORS section: provide you web service name (part of it's url)</li>
      <li>In Auth section: provide tenant name and clientId in windows.config object</li>
      </ul></li>
   <li>In WebService/Controllers/ValuesController file:
    <ul>
      <li>In CORS attribute: provide name of your SP tenant</li>
    </ul>
   </li>
   <li>In WebService/Controllers/ProvisionController file:    
   <ul><li>Provide url to your ClientPart.aspx file (just for return redirection purposes)</li></ul></li>
   </ul>
   Publish web service, publish client part solution and be aware of configurating CORS and authentication as described in <a href="http://itgoat.pl/sharepoint-online-to-azure-web-service-authenticated-with-aad">related post</a>.
