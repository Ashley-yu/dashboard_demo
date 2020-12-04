<template>
  <div class="terminal-page">
    <h1 class="page-title">Logs</h1>
    <div class="pb-xlg h-100">
      <Widget class="mb-0 h-100 w-100 terminal-content">
        <div ref="terminal" id="terminal"></div>
      </Widget>
    </div>
  </div>
</template>

<script>
import { Terminal } from "xterm";
import "xterm/css/xterm.css";
import { FitAddon } from 'xterm-addon-fit';

export default {
  name: "EquipTerminal",
  data() {
    return {
      term: '',
    };
  },
  methods: {
    initTerminal() {
      this.term = new Terminal({
        fontSize: '16',
        lineHeight: '1.2',
        rendererType: 'canvas', // 渲染類型
        scrollback: 800, // 回滾
        rows: 10, // 行數
        // cols: 125,
        // tabStopWidth: 8, //製表寬度
        // cursorBlink: false, // 游標閃爍
        // convertEol: false, // 啟用, 游標為下一行開頭
        // disableStdin: true, // 是否禁用輸入
        // cursorStyle: 'underline', // 游標樣式
        // cursorColor: '#29323a',
        theme: {
          background: '#29323a',// 背景色
          // foreground: 'white', // 文字顏色
          // cursor: "help" // 游標
        }
      });
    },
    printLogs() {
      this.term.writeln('\x1b[38;5;245m30.11.20 17:17:49 (+0800) \x1b[0m\x1b[38;5;3m Restarting service \'main sha256:b429f83a68646f226f935d071dc10e229bfd1f3a0b2e3108215c63a74c6d13b5\' \x1b[0m');
      this.term.writeln('\x1b[38;5;245m30.11.20 17:17:13 (+0800) \x1b[0m\x1b[48;5;184m main \x1b[0m\x1b[38;5;28m 2020/11/30 09:17:13 serial.Open success &os.File{file:(*os.file)(0x203a100)} \x1b[0m');
      this.term.writeln('\x1b[38;5;245m30.11.20 17:17:48 (+0800) \x1b[0m\x1b[48;5;184m main \x1b[0m\x1b[38;5;28m 2020/11/30 09:17:48 serial.Open success &os.File{file:(*os.file)(0x203a100)} \x1b[0m');
      this.term.writeln('\x1b[38;5;245m30.11.20 17:17:54 (+0800) \x1b[0m\x1b[38;5;3m Service exited \'main sha256:b429f83a68646f226f935d071dc10e229bfd1f3a0b2e3108215c63a74c6d13b5\' \x1b[0m');
      this.term.writeln('\x1b[38;5;245m30.11.20 17:18:51 (+0800) \x1b[0m\x1b[38;5;3m Restarting service \'main sha256:b429f83a68646f226f935d071dc10e229bfd1f3a0b2e3108215c63a74c6d13b5\' \x1b[0m');
      this.term.writeln('\x1b[38;5;245m30.11.20 17:17:48 (+0800) \x1b[0m\x1b[48;5;184m main \x1b[0m\x1b[38;5;28m 2020/11/30 09:17:48 serial.Open success &os.File{file:(*os.file)(0x203a100)} \x1b[0m');
      this.term.writeln('\x1b[38;5;245m30.11.20 17:18:50 (+0800) \x1b[0m\x1b[48;5;184m main \x1b[0m\x1b[38;5;28m 2020/11/30 09:18:50 serial.Open success &os.File{file:(*os.file)(0x203a100)} \x1b[0m');
    },
    terminalOnKey() {
      // 判斷取得輸入值
      this.term.onKey((e) => {
        const ev = e.domEvent;
        const printable = !ev.altKey && !ev.ctrlKey && !ev.metaKey;

        if (ev.keyCode === 13) {
          this.term.prompt();
        } else if (ev.keyCode === 8) {
          // Do not delete the prompt
          if (this.term._core.buffer.x > 2) {
            this.term.write('\b \b');
          }
        } else if (printable) {
          this.term.write(e.key);
        }
      });
    },
    runTerminal() {
      this.initTerminal();

      // 換行起始符號“$”
      // this.term.prompt = () => {
      //   this.term.write("\r\n$ ");
      // };

      this.term.open(document.getElementById('terminal'));
      this.term.writeln('\x1b[38;5;3mLoading logs ... \x1b[0m');

      const _this = this;
      setTimeout(function(){
        // 清除畫面
        _this.term.write('\x1bc');
        // 取得資料
        _this.printLogs();
      },3000);

      // this.term.prompt();

      // 自適應視窗大小 (width)
      const fitAddon = new FitAddon();
      this.term.loadAddon(fitAddon);
      fitAddon.fit();

      // this.terminalOnKey();

      // Resize screen
      window.onresize = function() {
        fitAddon.fit();
      };
    },
  },
  mounted() {
    this.runTerminal();
  },
  beforeDestroy () {
    this.term.dispose();
  },
};
</script>

<style src="./EquipTerminal.scss" lang="scss" />
