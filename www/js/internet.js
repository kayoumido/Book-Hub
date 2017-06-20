/**
 * Check if device is connected to internet
 * @return {Boolean} [description]
 */
function hasInternet() {
    if (navigator.connection.type == Connection.NONE) {
        config.internet = false;
    }
    else {
        config.internet = true;
    }
}
