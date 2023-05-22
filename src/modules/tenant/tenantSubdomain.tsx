import { AuthToken } from "../auth/authToken";

export const tenantSubdomain = {
  fromLocationHref() {
    const hostSplitted = window.location.host.split(".");

    // The URL with subdomain must have at least one more dot then
    // the url without the subdomain

    const subdomain = hostSplitted[1] ? hostSplitted[0] : false;

    if (subdomain === "www") {
      return false;
    }

    return subdomain;
  },
};
