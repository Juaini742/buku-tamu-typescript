import {Container, Hed1, Paragraph} from "../../atoms";
import ProfileUpdateData from "../../molecules/client/Profile/update";
import Templates from "../../templates";

function ProfileUpdate() {
  return (
    <Templates>
      <Container className="mt-24">
        <Hed1 variant="title">Kantor Badan Pusat Statistik Kab. HST</Hed1>
        <Paragraph variant="subTitile">
          Selamat datang di halaman Perbaharui Profil
        </Paragraph>
        <ProfileUpdateData />
      </Container>
    </Templates>
  );
}

export default ProfileUpdate;
