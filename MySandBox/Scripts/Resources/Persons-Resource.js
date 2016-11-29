registrationModule.factory('PersonsResource', function ($log,$resource) {
    $log.info('PersonsResource : Setting url to Getting the data');
    return $resource('/MySandBox/Hello/JustTheData'); // Note the full endpoint address
});
registrationModule.factory('PersonsSaveResource', function ($log, $resource) {
    $log.info('PersonsSaveResource : Setting url to Saving the data');
    return $resource('/MySandBox/Hello/Save'); // Note the full endpoint address
});