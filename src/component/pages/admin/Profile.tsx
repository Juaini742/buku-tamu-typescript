import {Container} from "../../atoms";
import ProfileData from "../../molecules/admin/Profile";
import AdminTemplate from "../../templates/admin";

function ProfileAdmin() {
  return (
    <AdminTemplate>
      <Container>
        <ProfileData />
      </Container>
    </AdminTemplate>
  );
}

export default ProfileAdmin;
