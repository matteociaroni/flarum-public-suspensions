<?php

namespace MatteoCiaroni\PublicSuspensions;

use Flarum\Extend;
use Flarum\Api\Serializer\UserSerializer;
use Carbon\Carbon;

return [
    (new Extend\Frontend("forum"))
        ->js(__DIR__."/js/dist/forum.js"),
        
    (new Extend\Frontend("admin"))
        ->js(__DIR__."/js/dist/admin.js"),
        
    new Extend\Locales(__DIR__."/locale"),

	// add "suspended" attributes to user API
	(new Extend\ApiSerializer(UserSerializer::class))
		->attribute("suspended", function ($serializer, $user, $attributes) {

			$actorCanViewSuspensions = $serializer->getActor()->hasPermission("matteociaroni-public-suspensions.read_suspensions");
			$isUserSuspended = $user->suspended_until && $user->suspended_until->gt(Carbon::now());

			return $actorCanViewSuspensions ? $isUserSuspended : null;
        })
];
