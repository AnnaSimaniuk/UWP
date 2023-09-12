import { component$, useStyles$ } from "@builder.io/qwik";
import { AboutTeamPicture } from "./about-team-picture/AboutTeamPicture";
import styles from "./AboutTeamItem.css?inline";

interface AboutTeamItemProps {
  name: string;
  position: string;
  alt: string;
  src: string;
}

export const AboutTeamItem = component$((props: AboutTeamItemProps) => {
  useStyles$(styles);
  const { name, position } = props;

  return (
    <li class="about__team-list-item">
      <div class="about__team-card">
        <div>
          <AboutTeamPicture {...props} />
          <p class="mb-2 mt-5 font-bold uppercase leading-[1.4] xl:mt-4 2xl:text-2xl 2xl:leading-[1.4]">
            {name}
          </p>
          <p class="text-sm font-bold uppercase leading-[1.4] text-middleGrey xl:text-base">
            {position}
          </p>
        </div>
      </div>
    </li>
  );
});
