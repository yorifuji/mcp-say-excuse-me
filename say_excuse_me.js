import { exec } from "child_process";

export async function say_excuse_me() {
  return new Promise((resolve, reject) => {
    exec('say -v Kyoko "ちょっといいですか"', (error, stdout, stderr) => {
      if (error) {
        console.error(
          `exec error: ${error.message}, stdout: ${stdout}, stderr: ${stderr}`
        );
        reject(error);
        return;
      }
      if (stderr) {
        console.error(`stderr: ${stderr}`);
        reject(stderr);
        return;
      }
      console.log(`stdout: ${stdout}`);
      resolve(stdout);
    });
  });
}
