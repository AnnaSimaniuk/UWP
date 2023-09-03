import { component$, HTMLAttributes, noSerialize } from "@builder.io/qwik";
import { ErrorField } from "~/components/ui/error-field/ErrorField";
import { ClipIcon } from "~/assets/icons";

interface InputFileProps extends HTMLAttributes<HTMLInputElement> {
  file: any;
  children?: any;
}

const maxFileSizeInBytes = 2 * 1048576;
export const InputFile = component$((props: InputFileProps) => {
  return (
    <div class={"flex flex-col gap-[10px] lg:mb-[39px] mb-6"}>
      <div class="add__file group flex w-fit flex-row items-center gap-[10px]">
        <label
          class="label-file mb-0 flex h-[38px] w-[38px] cursor-pointer items-center justify-center rounded-full bg-bgColorBtnForm transition-all group-hover:bg-main"
          for="upload{num}"
        >
          <span>
            <ClipIcon />
          </span>
        </label>
        <input
          class="font-0 absolute w-0 cursor-pointer opacity-0"
          id="upload{num}"
          type="file"
          accept=".pdf,.doc,.docx"
          onChange$={(e) => {
            props.file.error = null;
            const selectedFiles = e.target.files;
            if (selectedFiles && selectedFiles.length > 0) {
              if (selectedFiles[0].size > maxFileSizeInBytes) {
                props.file.error = `File size should be less than 2 MB`;
                return;
              }
              props.file.data = noSerialize(selectedFiles[0]);
            }
          }}
          {...props}
        />
        {props.file.error ? (
          <ErrorField message={props.file.error} />
        ) : props.file.data.name ? (
          <span class={"text-sm font-medium text-middleGrey"}>
            {props.file.data.name}
          </span>
        ) : (
          <span class={"text-sm font-medium text-middleGrey"}>upload file</span>
        )}
      </div>
      <span class={"text-sm font-medium text-middleGrey"}>
        You can upload a file size up to 2 MB and in the following formats:
        .doc, .docx, .pdf
      </span>
    </div>
  );
});
