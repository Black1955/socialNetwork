import { useState } from "react";
import InputSearch from "../../ui/InputSearch/InputSearch";
import { useFindUserQuery } from "../../services/user";
import SearchProfile from "../../ui/SearchProfile/SearchProfile";
const FindUser = () => {
  const [value, setValue] = useState<string>("");
  const { data: users, isLoading } = useFindUserQuery(value);

  return (
    <div style={{ position: "relative" }}>
      <InputSearch
        value={value}
        onChange={e => setValue(e.target.value)}
        placeholder='search'
      />
      <div
        style={{
          position: "absolute",
          backgroundColor: "#fff",
          width: "100%",
          borderRadius: "10px",
        }}
      >
        {users &&
          users.map(({ avatar_url, id, nickname }) => (
            <SearchProfile
              avatar_url={avatar_url}
              id={id}
              nickname={nickname}
              key={id}
            />
          ))}
      </div>
      {isLoading && <h1>loading...</h1>}
    </div>
  );
};

export default FindUser;
