+++
title = "Aufbau"
date = 2021-07-27T22:42:33+02:00
hidden = true
+++

{{< notice info >}}
Damit ein Empfehlungssystem auch eine Empfehlung machen kann, braucht es zunächst eine Menge Daten, welche zusammen einen *Kontext* ergeben.
{{< /notice >}}

#### Kontext

Der **Kontext** konstituiert sich dabei aus:
{{% expand  "dem Benutzerprofil" %}}
*Geschlecht*, *Alter*, *Interessengebiete* sowie *gelesene Texte*, *gekaufte Produkte* etc.
{{% /expand %}}
{{% expand "der Entitätsmente" %}}
 z.B. *Bücher*, *Musikstücke*, *Konzerte*, *Reisen*, *Nachrichten*, *Fachartikel*, *E-Mails*, *Fachleute* etc. 
 {{% /expand %}}
 {{% expand "der Situation" %}}
*Datum*, *Uhrzeit*, *Geoinformationen* (Land, Stadt etc.), *verwendetes Gerät*, *gerade gezeigter Text im Browser des Benutzers* etc.

{{% /expand %}}

##### … und wie kommen die Daten alle zusammen?

Und zwar so:

{{< figure src="rs.png" title="Das Empfehlungssystem selektiert aus einer Menge möglicher \"Entitäten\" eine Teilmenge, welche dann dem Benutzer empfohlen wird."
 attr="[Quelle]" attrlink="/bibliography/#empfehlungssysteme-2" >}}
 
 Dabei wird ... 
 - … die Information des *Benutzerprofils* aus den Daten des Nutzerkontos und
 - … die Information der *Situation* aus den "Spuren", die wir im Internet (z.B. anhand von Cookies) hinterlassen,

gewonnen. 

{{< notice note >}} 
Cookies sind eine technische Notwendigkeit, um bspw. über Webseitenaufrufe (z.B. Google, Online-Banking) hinweg eingeloggt zu bleiben. 

Problematisch ist es bei den sogenannten *Tracking-Cookies* oder auch Drittanbieter-Cookies, die den Werbetreibenden gehört und sich oft hinter Webebannern versteckt. Diese tauchen dann über verschiedene Webseiten hinweg auf (sie 'verfolgen' uns), somit können dann Werbetreibende ein Bild über unser Nutzungsverhalten machen und uns damit **personalisierte Werbung** anzeigen.
{{< /notice >}}

{{% hint warning %}}
**Aufgabe:** Überlege dir, welche Spuren wir im Netz hinterlassen und vergleiche sie mit der Webseite [Trace My Shadow](https://myshadow.org/trace-my-shadow).
{{% /hint %}}


[← Zurück zur Funktionalität]({{< ref "/recommender-systems/functionality" >}})

{{% refs "Quellenverzeichnis" %}}

* A. Klahold, _Empfehlungssysteme: Recommender Systems ; Grundlagen, Konzepte und Lösungen_, 1\. Aufl. Wiesbaden: Vieweg + Teubner, 2009, Seite 2.
* G. Friedrich, „Was sind Cookies und warum muss man sie akzeptieren?“, MADS.de, März 18, 2019. https://mads.de/das-sind-cookies/ (zugegriffen Aug. 11, 2021).
* „Trace my Shadow | Me and my Shadow“. [https://myshadow.org/](https://myshadow.org/) (zugegriffen Aug. 05, 2021).

{{% /refs %}}