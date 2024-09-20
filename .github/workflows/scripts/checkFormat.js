const is_image_format = (tag) => {
  const pattern =
    /^([a-zA-Z0-9\*._-]+\/[a-zA-Z0-9\*._-]+:[a-zA-Z0-9\*._-]+|[a-zA-Z0-9\*._-]+\/[a-zA-Z0-9\*._-]+\/[a-zA-Z0-9\*._-]+:[a-zA-Z0-9\*._-]+|[a-zA-Z0-9\*._-]+\/[a-zA-Z0-9\*._-]+\/[a-zA-Z0-9\*._-]+\/[a-zA-Z0-9\*._-]+:[a-zA-Z0-9\*._-]+|[a-zA-Z0-9\*._-]+:[a-zA-Z0-9\*._-]+)$/;
  const reg = new RegExp(pattern, "g");
  if (!reg.test(tag)) {
    return false;
  }
  return true;
};
// 主函数
function main() {
  console.log('main',process.argv);
  const args = process.argv.slice(2);
  if (args.length < 1) {
      console.error('Usage: node script.js "tag text"');
      return;
  }

  const tag = args[0];
  const result = is_image_format(tag);
  console.log(`set-output: name=is_image_format::${result}`);
}
main()