import FeedbackContainer from "@/containers/feedback/FeedbackContainer";
import ProfileContainer from "@/containers/profile/ProfileContainer";
import SkillsContainer from "@/containers/skills/SkillsContainer";
import WorkContainer from "@/containers/work/WorkContainer";

export default function Home() {
  return (
    <>
      <ProfileContainer />
      <WorkContainer />
      <SkillsContainer />
      <FeedbackContainer />
    </>
  );
}
