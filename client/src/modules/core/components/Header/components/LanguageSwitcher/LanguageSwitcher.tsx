import { useRouter } from "next/router";

const LanguageSwitcher = () => {
  const router = useRouter();
  return (
    <div>
      <select
        onChange={(e) =>
          router.push(
            {
              pathname: router.pathname,
              query: router.query,
            },
            {
              pathname: router.pathname,
              query: router.query,
            },
            { locale: e.target.value }
          )
        }
      >
        <option value="en-US">Англійська</option>
        <option value="ua">Українська</option>
      </select>
    </div>
  );
};

export default LanguageSwitcher;
