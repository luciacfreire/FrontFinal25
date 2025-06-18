import { useEffect, useState } from "preact/hooks";

const MarkFavorite = ({ id }: { id: string }) => {
  const [isFav, setIsFav] = useState<boolean>(false);
  useEffect(() => {
    const cookie = document.cookie.split("; ").find((c) =>
      c.startsWith("favoriteIds")
    );
    const ids = cookie ? cookie.split("=")[1].split(",") : [];
    setIsFav(ids.includes(id));
  }, [id]);

  const toggleFav = () => {
    const cookie = document.cookie.split("; ").find((c) =>
      c.startsWith("favoriteIds")
    );
    const ids = cookie ? cookie.split("=")[1].split(",") : [];

    const updated = isFav ? ids.filter((favId) => favId !== id) : [...ids, id];

    const expires = new Date();
    expires.setDate(expires.getDate() + 7);
    document.cookie = `favoriteIds=${
      updated.join(",")
    }; expires=${expires.toUTCString()}; path=/`;

    setIsFav(!isFav);
  };

  return (
    <button
      onClick={toggleFav}
      style={{
        background: "none",
        border: "none",
        fontSize: "1.5rem",
        cursor: "pointer",
        padding: 0,
        marginTop: "0.5rem",
      }}
    >
      {isFav ? "★" : "☆"}
    </button>
  );
};

export default MarkFavorite;
