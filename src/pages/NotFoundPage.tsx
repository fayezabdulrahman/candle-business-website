import { Link } from "react-router-dom";
import { Icon } from "../components/Icon";
import { BRAND_NAME } from "../config/brand";

export function NotFoundPage() {
  return (
    <main className="grid min-h-screen place-items-center bg-[#FAF9F6] px-6 text-center text-[#292524]">
      <div><Link className="text-lg font-medium uppercase tracking-[-0.07em]" to="/">{BRAND_NAME}</Link><p className="eyebrow mt-16">This room has not been lit</p><h1 className="mt-4 font-serif text-[clamp(4rem,9vw,8rem)] leading-[0.85] tracking-[-0.05em]">Nothing here,<br /><em>just yet.</em></h1><Link className="button-primary mt-10" to="/">Return home <Icon name="arrow-right" className="size-4" /></Link></div>
    </main>
  );
}
