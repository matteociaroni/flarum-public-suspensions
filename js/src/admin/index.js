import app from "flarum/admin/app";

app.initializers.add("matteociaroni/flarum-public-suspensions", () => {
	app.extensionData
		.for("matteociaroni-public-suspensions")

		// register permission to read suspensions
		.registerPermission(
			{
				icon: "fas fa-ban",
				label: app.translator.trans("matteociaroni-public-suspensions.admin.permissions.read_suspensions"),
				permission: "matteociaroni-public-suspensions.read_suspensions",
				tagScoped: false,
				allowGuest: true,
			},
			"view",
		);
});
