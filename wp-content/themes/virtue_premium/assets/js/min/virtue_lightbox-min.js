jQuery(document).ready((function($){function t(t,e){return/(png|jpg|jpeg|gif|tiff|bmp)$/.test($(e).attr("href").toLowerCase().split("?")[0].split("#")[0])}function e(){$('a[href]:not(".kt-no-lightbox"):not(.kb-gallery-item-link)').filter(t).attr("data-rel","lightbox")}function i(){$.extend(!0,$.magnificPopup.defaults,{tClose:"",tLoading:virtue_lightbox.loading,gallery:{tPrev:"",tNext:"",tCounter:virtue_lightbox.of},image:{tError:virtue_lightbox.error,titleSrc:function(t){return t.el.find("img").attr("alt")}}}),$("a[rel^='lightbox']:not('.kt-no-lightbox'):not('.custom-link')").magnificPopup({type:"image"}),$("a[data-rel^='lightbox']:not('.kt-no-lightbox'):not('.custom-link')").magnificPopup({type:"image"}),$(".kad-light-gallery").each((function(){$(this).find("a[data-rel^='lightbox']:not('.kt-no-lightbox'):not('.custom-link')").magnificPopup({type:"image",gallery:{enabled:!0},image:{titleSrc:"title"}})})),$(".kad-light-wp-gallery").each((function(){$(this).find('a[data-rel^="lightbox"]:not(".kt-no-lightbox"):not(".custom-link")').magnificPopup({type:"image",gallery:{enabled:!0},image:{titleSrc:function(t){return t.el.find("img").attr("data-caption")}}})})),$(".kad-light-mosaic-gallery").each((function(){$(this).find('a[data-rel^="lightbox"]:not(".kt-no-lightbox"):not(".custom-link")').magnificPopup({type:"image",gallery:{enabled:!0},image:{titleSrc:function(t){return t.el.parents(".gallery_item").find("img").attr("data-caption")}}})})),$(".wp-block-gallery").each((function(){$(this).find('a[data-rel^="lightbox"]:not(".kt-no-lightbox"):not(".custom-link")').magnificPopup({type:"image",gallery:{enabled:!0},image:{titleSrc:function(t){return t.el.parents(".blocks-gallery-item").find("figcaption").length?t.el.parents(".blocks-gallery-item").find("figcaption").html():t.el.find("img").attr("alt")}}})})),$("a.pvideolight").magnificPopup({type:"iframe"}),$("a.ktvideolight").magnificPopup({type:"iframe"}),$(".woocommerce-product-gallery__wrapper.woo_product_slider_enabled.woo_product_zoom_enabled").each((function(){$(this).parents(".woocommerce-product-gallery").prepend('<a href="#" class="woocommerce-product-gallery__trigger"></a>'),$(this).parents(".woocommerce-product-gallery").find("a.woocommerce-product-gallery__trigger").on("click",(function(t){t.preventDefault(),2<=$(this).parents(".woocommerce-product-gallery").find(".woocommerce-product-gallery__wrapper").children().length?$(this).parents(".woocommerce-product-gallery").find(".flex-active-slide a[data-rel^='lightbox']:not('.kt-no-lightbox')").magnificPopup("open",$(this).parents(".woocommerce-product-gallery").find(".flex-active-slide").index()):$(this).parents(".woocommerce-product-gallery").find("a[data-rel^='lightbox']:not('.kt-no-lightbox')").magnificPopup("open")}))}))}e(),i(),$(window).on("infintescrollnewelements",(function(t){i()}))}));