/* 
* Free to use under the MIT license.
* https://www.opensource.org/licenses/mit-license.php
* 4/18/2015
*/

// Exercise data
var exercises = {
	"1-1": {
		answer: "<p>The music video for Rihanna’s song <strong>American Oxygen</strong> depicts various moments from American history, including the inauguration of Barack Obama.</p>",
		correctMd: "The music video for Rihanna’s song **American Oxygen** depicts various moments from American history, including the inauguration of Barack Obama."
	}, 
	"1-2": {
		answer: "<p>Why, sometimes I’ve believed as many as <em>six</em> impossible things before breakfast.</p>",
		correctMd: "Why, sometimes I’ve believed as many as _six_ impossible things before breakfast."
	},
    "1-3": {
        answer: "<p><strong>Everyone <em>must</em> attend the meeting at 5 o’clock today.</strong></p>",
        correctMd: "**Everyone _must_ attend the meeting at 5 o’clock today.**"
    }, 
	"1-4": {
		answer: "<p>I am totally awesome.*</p>\n<p>* for certain very small values of awesome</p>",
		correctMd: "I am totally awesome.*\n\n\\* for certain very small values of awesome"
	}, 
	"2-1": {
		answer: "<p>The sky above the port was the color of television, tuned to a dead channel.</p>\n<p>It was a bright cold day in April, and the clocks were striking thirteen.</p>",
		correctMd: "The sky above the port was the color of television, tuned to a dead channel.\n\nIt was a bright cold day in April, and the clocks were striking thirteen."
	}, 
	"2-2": {
		answer: "<p>I have eaten<br>\nthe plums<br>\nthat were in<br>\nthe icebox</p>",
		correctMd: "I have eaten\\\nthe plums\\\nthat were in\\\nthe icebox"
	},
	"3-1": {
		answer: "<h2>Chapter 1</h2>\n<p>Something about the room made him uneasy.</p>\n<h2>Chapter 2</h2>\n<p>It's behind you! Hurry before it</p>",
		correctMd: "## Chapter 1\nSomething about the room made him uneasy.\n## Chapter 2\nIt's behind you! Hurry before it"
	}, 
	"3-2": {
		answer: "<h1>After the Big Bang</h1>\n<p>A brief summary of time</p>\n<h2>Life on earth</h2>\n<p>10 billion years</p>\n<h2>You reading this</h2>\n<p>13.7 billion years</p>",
		correctMd: "# After the Big Bang\nA brief summary of time\n## Life on earth\n10 billion years\n## You reading this\n13.7 billion years"
	},     
	"4-1": {
		answer: "<p>The quote</p>\n<blockquote>\n<p>Somewhere, something incredible is waiting to be known</p>\n</blockquote>\n<p>has been ascribed to Carl Sagan.</p>",
		correctMd: "The quote\n\n> Somewhere, something incredible is waiting to be known\n\nhas been ascribed to Carl Sagan."
	}, 
	"4-2": {
		answer: "<p>My favorite Miss Manners quotes:</p>\n<blockquote>\n<p>Allowing an unimportant mistake to pass without comment is a wonderful social grace.</p>\n<p>Ideological differences are no excuse for rudeness.</p>\n</blockquote>",
		correctMd: "My favorite Miss Manners quotes:\n\n> Allowing an unimportant mistake to pass without comment is a wonderful social grace.\n>\n> Ideological differences are no excuse for rudeness."
	}, 
	"5-1": {
		answer: "<ul>\n<li>Flour</li>\n<li>Cheese</li>\n<li>Tomatoes</li>\n</ul>",
		correctMd: "- Flour\n- Cheese\n- Tomatoes"
	}, 
	"5-2": {
		answer: "<p>Four steps to better sleep:</p>\n<ol>\n<li>Stick to a sleep schedule</li>\n<li>Create a bedtime ritual</li>\n<li>Get comfortable</li>\n<li>Manage stress</li>\n</ol>",
		correctMd: "Four steps to better sleep:\n1. Stick to a sleep schedule\n2. Create a bedtime ritual\n3. Get comfortable\n4. Manage stress"
	},
    "5-3": {
		answer: "<p>1986. What a great season. Arguably the finest season in the history of the franchise.</p>",
		correctMd: "1986\\. What a great season. Arguably the finest season in the history of the franchise."
	},     
	"6-1": {
		answer: "<p>You can do anything at <a href=\"https://html5zombo.com\">https://html5zombo.com</a></p>",
		correctMd: "You can do anything at <https://html5zombo.com>"
	}, 
	"6-2": {
		answer: "<p>The <a href=\"http://www.ur.ac.rw\">University of Rwanda</a> was formed in 2013 through the merger of Rwanda’s seven public institutions of higher education.</p>",
		correctMd: "The [University of Rwanda](http://www.ur.ac.rw) was formed in 2013 through the merger of Rwanda’s seven public institutions of higher education."
	}, 
	"6-3": {
		answer: "<p><a href=\"https://goo.gl/YEEHP0\">Hurricane</a> Erika was the strongest and longest-lasting tropical cyclone in the 1997 Atlantic <a href=\"https://goo.gl/YEEHP0\">hurricane</a> season.</p>",
		correctMd: "[Hurricane][1] Erika was the strongest and longest-lasting tropical cyclone in the 1997 Atlantic [hurricane][1] season.\n\n[1]:https://goo.gl/YEEHP0"
	}, 
	"7-1": {
		answer: "<p><img src=\"https://commonmark.org/help/images/favicon.png\" alt=\"\"></p>",
		correctMd: "![](https://commonmark.org/help/images/favicon.png)"
	}, 
	"7-2": {
		answer: "<p><img src=\"https://commonmark.org/help/images/favicon.png\" alt=\"Logo\" title=\"Creative Commons licensed\"></p>",
		correctMd: "![Logo][1]\n\n[1]: https://commonmark.org/help/images/favicon.png \"Creative Commons licensed\""
	}, 
	"8-1": {
		answer: "<p>When <code>x = 3</code>, that means <code>x + 2 = 5</code></p>",
		correctMd: "When `x = 3`, that means `x + 2 = 5`"
	}, 
	"8-2": {
		answer: "<p>Who ate the most donuts this week?</p>\n<pre><code>Jeff  15\nSam   11\nRobin  6</code></pre>",
		correctMd: "Who ate the most donuts this week?\n\n    Jeff  15\n    Sam   11\n    Robin  6"
	},  
	"8-3": {
		answer: "<p>A loop in JavaScript:</p>\n<pre><code>var i;\nfor (i=0; i&lt;5; i++) {\n  console.log(i);\n}\n</code></pre>\n<p>What numbers will this print?</p>",
		correctMd: "A loop in JavaScript:\n```\nvar i;\nfor (i=0; i<5; i++) {\n  console.log(i);\n}\n```\nWhat numbers will this print?"
	},
	"9-1": {
		answer: "<ul>\n<li>水果\n<ul>\n<li>苹果</li>\n<li>橙子</li>\n<li>香蕉</li>\n</ul>\n</li>\n<li>奶制品\n<ul>\n<li>牛奶</li>\n<li>奶酪</li>\n</ul>\n</li>\n</ul>",
		correctMd: "* 水果\n  * 苹果\n  * 橙子\n  * 香蕉\n* 奶制品\n  * 牛奶\n  * 奶酪"
	}, 
	"9-2": {
		answer: "<ul>\n<li>2014 年世界杯\n<ol>\n<li>德国</li>\n<li>阿根廷</li>\n<li>荷兰</li>\n</ol>\n</li>\n<li>2015 年橄榄球世界杯\n<ol>\n<li>新西兰</li>\n<li>澳大利亚</li>\n<li>南非</li>\n</ol>\n</li>\n</ul>",
		correctMd: "+ 2014 年世界杯\n  1. 德国\n  2. 阿根廷\n  3. 荷兰\n+ 2015 年橄榄球世界杯\n  1. 新西兰\n  2. 澳大利亚\n  3. 南非"
	},
	"9-3": {
		answer: "<ol>\n<li>\n<p>配料</p>\n<ul>\n<li>意大利面</li>\n<li>意大利西红柿酱</li>\n<li>盐</li>\n</ul>\n</li>\n<li>\n<p>烹饪</p>\n<p>将水烧开，加入少许盐和意大利面。煮到意大利面变<strong>嫩</strong>。</p>\n</li>\n<li>\n<p>服务</p>\n<p>在盘子上晾干意大利面。加入加热后的意大利西红柿酱。</p>\n<blockquote>\n<p>尤其要注意的是，不要让客人独自吃意大利面。</p>\n</blockquote>\n<p>请享用！</p>\n</li>\n</ol>",
		correctMd: "1. 配料\n\n    - 意大利面\n    - 意大利西红柿酱\n    - 盐\n\n2. 烹饪\n\n   将水烧开，加入少许盐和意大利面。煮到意大利面变**嫩**。\n\n3. 服务\n\n   在盘子上晾干意大利面。加入加热后的意大利西红柿酱。 \n\n   > 尤其要注意的是，不要让客人独自吃意大利面。\n\n   请享用！"
	}
};