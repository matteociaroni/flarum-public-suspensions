import app from "flarum/forum/app";
import { extend } from "flarum/extend";
import Badge from "flarum/components/Badge";
import Model from "flarum/Model";
import User from "flarum/models/User";

app.initializers.add("matteociaroni/flarum-public-suspensions", () => {
	User.prototype.suspended = Model.attribute("suspended");

	extend(User.prototype, "badges", function (items) {

		// add badge to user if suspended
		if (this.suspended())
		{
			items.add(
				"suspended",
				Badge.component({
					icon: "fas fa-ban",
					type: "suspended",
					label: app.translator.trans("flarum-suspend.forum.user_badge.suspended_tooltip"),
				})
			);
		}
	});
});
