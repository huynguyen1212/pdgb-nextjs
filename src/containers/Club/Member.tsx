import { SMembers } from "./style";
import CardMember from "src/components/CardMember";

export default function Member({ data }: any) {
  return (
    <SMembers>
      {data &&
        data.length > 0 &&
        data.map((member: any) => (
          <div key={member.id} className="item-member">
            <CardMember
              avatar=""
              name={member.name}
              id={member.id}
              email={member.email}
            />
          </div>
        ))}
    </SMembers>
  );
}
