$(function(){$("#div_1_1 .imghover").mouseover(function(){$(this).find("img").animate({width:"208px",height:"139px",left:"-17px",top:"-16px"},100);var a=$(this).find(".tworow").find("a");if(a.height()>30){$(this).find(".tworow").animate({height:"32px","line-height":"16px"},150)}}).mouseleave(function(){$(this).find("img").animate({width:"174px",height:"116px",left:"0",top:"0"},100);$(this).find(".tworow").animate({height:"24px","line-height":"24px"},150)});$("#div_1_2 .imghover").mouseover(function(){$(this).find("img").animate({width:"134px",height:"120px",left:"-6px",top:"-10px"},100);var a=$(this).find(".tworow").find("a");if(a.height()>30){$(this).find(".tworow").animate({height:"32px","line-height":"16px"},150)}}).mouseleave(function(){$(this).find("img").animate({width:"112px",height:"100px",left:"0",top:"0"},100);$(this).find(".tworow").animate({height:"24px","line-height":"24px"},150)})});
