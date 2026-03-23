import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

export default createMiddleware(routing);

export const config = {
	// Match only internationalized pathnames
	// Applique i18n à toutes les routes (hors assets / API) pour permettre la redirection
	// vers le préfixe de langue: /en/..., /fr/...
	matcher: ["/((?!api|_next|.*\\..*).*)"],
};
