/**
 * GSE only wants the course_is_public_to_auth_users button disabled for shopping
 */
var on_admin_page = ((window.location.pathname).indexOf('settings') != -1);

if(on_admin_page) {
	var $iptau_checkbox = $('#course_is_public_to_auth_users');
	$iptau_checkbox.closest("div").addClass("selection-disabled");
	$iptau_checkbox.closest("span").after('<span> <em>(this cannot be changed during shopping period)</em></span>');
	$iptau_checkbox.attr("disabled", true);
}
