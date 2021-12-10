module.exports = {
    "id": "zqyd",
    "name": "钟情阅读",
    "keys": ["zqydurl","zqydbody","zqydurl2","zqydbody2","zqydurl3","zqydbody3","zqydurl4","zqydbody4","zqydurl5","zqydbody5","zqydurl6","zqydbody6","zqydurl7","zqydbody7","zqydurl8","zqydbody8","zqydurl9","zqydbody9","zqydurl10","zqydbody10"],
    "author": "@tom",
    "settings": [{
      "id": "zqydSuffix",
      "name": "当前账号",
      "val": "1",
      "type": "number",
      "desc": "当前抓取ck记录的账号序号，如：1、2、3、4"
    }, {
      "id": "zqydCount",
      "name": "账号个数",
      "val": "5",
      "type": "number",
      "desc": "指定任务最多跑几个账号，根据抓取的账号数据个数来设值"
    }, {
      "id": "zqydXH",
      "name": "循环获取ck",
      "val": "0",
      "type": "number",
      "desc": "0关闭，1打开，默认关闭"
    }, {
      "id": "zqydTXTX",
      "name": "txtx",
      "val": "0",
      "type": "number",
      "desc": "0关闭，1打开，默认关闭"
    }, {
      "id": "zqydSC",
      "name": "sc",
      "val": "0",
      "type": "number",
      "desc": "0关闭，1打开，默认关闭"
    }, {
      "id": "zqydnotifyttt",
      "name": "推送控制",
      "val": "1",
      "type": "number",
      "desc": "0关闭，1推送,默认12点以及23点推送"
    }, {
      "id": "zqydnotifyInterval",
      "name": "通知控制",
      "val": "2",
      "type": "number",
      "desc": "0关闭，1为 所有通知，2为 12，23 点通知，3为 6，12，18，23 点通知"
    }, {
      "id": "zqydMinutes",
      "name": "推送-通知 分钟控制",
      "val": "10",
      "type": "number",
      "desc": "推送以及通知控制在什么分钟段，可设置0-59,默认0到10"
    }],
    "repo": "https://gitee.com/tom210120/tom/raw/master/ZQ/zq.js",
    "icons": ["https://gitee.com/tom210120/tom/raw/master/Tom/Tom.jpg", "https://gitee.com/tom210120/tom/raw/master/Tom/Tom.jpg"],
    "script": "https://gitee.com/tom210120/tom/raw/master/ZQ/zq.js",
    "icon": "https://gitee.com/tom210120/tom/raw/master/Tom/Tom.jpg",
    "favIcon": "mdi-star-outline",
    "favIconColor": "grey",
    "datas": [{
      "key": "zqydurl",
      "val": "https://kandian.wkandian.com/v3/article/lists.json?catid=0&op=0&behot_time=0&oid=0&video_catid=1453&access=4G&app_name=zqkd_app&app_version=3.5.5&carrier=CHN-UNICOM&channel=c4096&device_brand=samsung&device_id=55467832&device_model=SM-A7000&device_platform=android&device_type=android&dpi=480&inner_version=202108181034&language=zh-CN&memory=1&mi=0&mobile_type=1&net_type=2&network_type=4G&openudid=7c544a49ba475b24&os_api=23&os_version=MMB29M.A7000ZCU1CRC2&phone_sim=1&request_time=1639110443&resolution=1080x1920&rom_version=MMB29M.A7000ZCU1CRC2&s_ad=NYdVi_XPUOzA%3DQukRNP-XxFWAArrscZiybbTL-xBQwkQrGZ&s_im=HUJybc31G2V0%3DJYNlnd_BPyHhlJCm7E3wrw%3D%3DaK&sm_device_id=20210913191348778e096e2230a8d6f60483126c18b696013b246616d64200&storage=11.78&uid=58964914&version_code=63&zqkey=MDAwMDAwMDAwMJCMpN-w09Wtg5-Bb36eh6CPqHualIejl7B1z2Sxp5-xhXyp4LDPyGl9onqkj3ZqYJa8Y898najWsJupZLDdn7GEjHbgrrmyapqGcXY&zqkey_id=2dd1e188838da6cf8c23df90b38bdd22&sign=38e8e33735dc2049c2242c44151cb4ab"
    },{
      "key": "zqydbody",
      "val": "p=w2JgR8oZr6IU%3DBty5sXh9aR9qYRLTZOTU178MyLkRYeBiZOP65oO7v9ez6kUmeZV-Lj-ezh_RLq0eSJkTXKU2AkCEX-RfUg2Y5mdWsjkUnx4eLFgWTbQ7E5JUUn0qarzGzYZANpqZBSByzJBed7JE-8GqjBwWkpsN4xWk3J5SWxM_MHt0qbO6yszuoI5h03Eugavvc_k21_Oi7ZjpoYZ5lS3pS7MecKdkj5N3JyeFSx_sfHiAnfgBh8Wy2KA23uMgHIQ8s1TdlTRbwd80ojcn6UUbanJ9E-4W7eRXg65z5Kxl8xxinjoncmTl3LC66ispL3O2HppENDlpn1uITie-py2MJG8C8orz6FR1eqexYzep-akbi_VnQVUIHlxHpUYhFwao7q_seefbYleROJWuHV2fgKaAzVOKAQLJi4tiVr3Gn44UkdSMhwF4ENQa7SiLV944NDoynhzcBHTLlJYzCQ7GsvgwdBopMZMM11eQqm1WROhDG1Maq3Z7tti4P3XCUpvcpN8PpvfNCd3elb3TJ448bX_g95_ZllRlU1lSrm_TSLQsy_RyCEFv87zYUHWaeYO-Ss6hEEf8rtQNr5kPyp7i8hqdjqpOs21vh-kQMvZ5qc7o7q0i88Dwva_RaOwv8wxLwxFOb1EYnFfUEJ97Ki2ntzSMW4cGM9W8c5yV4L5PWWIcclUzJyNiat2F0WDtuIcjiCDMxdYW0lXinp3Xzn2yGCgwl6W7ObeNszVDig2hn7mAbIeMHKrq2EZMCG9qoWxiip9Rq4EnE1fdK80cmhLsrN1_zipKDHy5HiGHdusxBFSsNf52l02mmDyr2oaxNhWk5pSHHi475qUwYqkJ-l5oUkoeNljdmfxMGROTIaDtcpE4qPnDgS2E915napX0_pNOi8LpRkQze9k2DET5_LBdJj7VcwgNFw9qwyGsKAfN2Ro4pmibhFH72rb3TwQujAWvYqtQ1ln6qFK3vJjudjiam8_m5C2q4zOr81mSDm-x4Hb653jraCzXiZ9G4AL8Duc7knBamIBwnOAdwd3FtolmabxfJmQh25HtjagJd-QsaEHQzBCCxPsZbpL6Ix3spZaRTy77zxzFOamKa_M5hNOgAQJ2xtAoTQgw74sb2DVk6yCIa1JBb4FN0BSWYRSax2imvWQMY0sygDo1HnDjSdldCtddpm2UU9hw0wapLh2-"
    },{
      "key": "zqydurl2",
      "val": "https://kandian.wkandian.com/v3/article/lists.json?catid=0&op=0&behot_time=0&oid=0&video_catid=1453&access=4G&app_name=zqkd_app&app_version=3.5.5&carrier=CHN-UNICOM&channel=c4096&device_brand=samsung&device_id=55467832&device_model=SM-A7000&device_platform=android&device_type=android&dpi=480&inner_version=202108181034&language=zh-CN&memory=1&mi=0&mobile_type=1&net_type=2&network_type=4G&openudid=7c544a49ba475b24&os_api=23&os_version=MMB29M.A7000ZCU1CRC2&phone_sim=1&request_time=1639134493&resolution=1080x1920&rom_version=MMB29M.A7000ZCU1CRC2&s_ad=VYFg4QJ5A6eY%3DwOyYw_EhYxmt6lUUuwfH7EXJXrkyG6cm&s_im=pUJybc31G2V0%3DJYNlnd_BPyHhlJCm7E3wrw%3D%3DsF&sm_device_id=20210913191348778e096e2230a8d6f60483126c18b696013b246616d64200&storage=11.78&uid=58964914&version_code=63&zqkey=MDAwMDAwMDAwMJCMpN-w09Wtg5-Bb36eh6CPqHualIejl7B1z2Sxp5-xhXyp4LDPyGl9onqkj3ZqYJa8Y898najWsJupZLDdn7GEjHbgrrmyapqGcXY&zqkey_id=2dd1e188838da6cf8c23df90b38bdd22&sign=4bdcf0204b08b636ee31cdfdd7b7f89a"
    },{
      "key": "zqydbody2",
      "val": "p=8YFg4QJ5A6eY%3DxnUlbsv2ZiAgzg99KCv9uZZnQ5updAM5mdyTGxXXRQVLEkaPc4QTQT-JUADNhH279NI0xchcF_DgkLLPxRAXgyOoFFA2gfPkN4LphoR93ho5oivuZv9ysoOSZuR_fqjiKKm3uVUU1LL_lVcLueqyEgCrlc_Z-Ga-AOZkxPLWCdtAVVyjwFzfn8FgZqyjzTkjF8dcPrbdDv2Eo9GaY_6UCKD6K3kbQj2OnGeOlnXm6_RCiPF0l4CK7h3HUC4xdmtnXEi5wrVNYqlvbUcP1nkBQFhUfe3IqWgWrnkghJJsOdYP-cJwZKxLCWLHfrkxkcEcI3kOZrjeUhekxir_vSrvS4RsWklzPYIhIw1utGTtJApqkIve_K9RvurAaTieQAEueVGsWUOMUMs_db4CVJcLBf8ffO2AYU4FIMc2ZUGoVQ0BM0b8eu0IUzMEt-H78Jw9a0sTUwT3EbQy0XLITntTaUB00_DCnE2mTVWBYkqrjLArZvsJP66J95cg7ylG5LrcdcfzZn5anLRZpL5dqqNMf4kSSfVSeT9X3bqbtmZoI9hYoUYwUTcFp-lBUBdLxCHOkM4fOPHs8JIFLLMDkY3GUWFAU2F0sAcel6bA9abefwfgpA74SKh_LcCcudglSGrTtQDDRKvegqRqSuke0N_HeAD4KkxUazoGf23ulfaSRzBg9kZIlCwD5aqo8E5aNIQHOMFQSFq3e8osDztgvudVGbjxshl7Mt37m-z_CWAKNBdkzp2PDRvgOdEtcWHrb85pfoDHQj9jqM9ANIUF8ILr0XoQGezYCRZ1p5srEb4ZrnJ6fT263i_CIpqPZKBp60bt56IdzhQGIIgILVPGpZVJJTX_Va4VFK6ae3Y45er8U5xILBRNjjakjzNrlVJu7jnxGSCtHGJP0Mnmp7jexPW_y9XQ7b9k61jOZamnQoYUsMHz1mGXXRPJLsaeBAXT4ld7UEzMS9b0cQ97br0JdhNthW9Hkw4wylBRK9cOQa9rVMufZfbcukigWO4rNXXV3oDKCadv4C91mVacSWc_6ibn7GEKl1nvlp3iAX5PX17YnQjS1lnIzdC2BXV8iE4kuYiTHz35IRrWHpZhKQ5dgm4jJNgD65JFDBDQRoauvCCyE3hgW4BV4l__KxD9lE3DrkVwIuhpGC4pgrkdZoYYggzHIgfcXghg1EeU"
    },{
      "key": "zqydurl3",
      "val": "https://kandian.wkandian.com/v3/article/lists.json?catid=0&op=0&behot_time=0&oid=0&video_catid=1453&access=4G&app_name=zqkd_app&app_version=3.5.5&carrier=CHN-UNICOM&channel=c4096&device_brand=samsung&device_id=55467832&device_model=SM-A7000&device_platform=android&device_type=android&dpi=480&inner_version=202108181034&language=zh-CN&memory=1&mi=0&mobile_type=1&net_type=2&network_type=4G&openudid=7c544a49ba475b24&os_api=23&os_version=MMB29M.A7000ZCU1CRC2&phone_sim=1&request_time=1639134493&resolution=1080x1920&rom_version=MMB29M.A7000ZCU1CRC2&s_ad=VYFg4QJ5A6eY%3DwOyYw_EhYxmt6lUUuwfH7EXJXrkyG6cm&s_im=pUJybc31G2V0%3DJYNlnd_BPyHhlJCm7E3wrw%3D%3DsF&sm_device_id=20210913191348778e096e2230a8d6f60483126c18b696013b246616d64200&storage=11.78&uid=58964914&version_code=63&zqkey=MDAwMDAwMDAwMJCMpN-w09Wtg5-Bb36eh6CPqHualIejl7B1z2Sxp5-xhXyp4LDPyGl9onqkj3ZqYJa8Y898najWsJupZLDdn7GEjHbgrrmyapqGcXY&zqkey_id=2dd1e188838da6cf8c23df90b38bdd22&sign=4bdcf0204b08b636ee31cdfdd7b7f89a"
    },{
      "key": "zqydbody3",
      "val": "p=HUJybc31G2V0%3DvoWtRZZLNIRPNhwckmkQdyhJSIDwF2L02F_FSFAMBtrWj6nS_VuzRW8r6f3EaZcdZOoRldAOdLjMzHgJi-ZmjrDKbKCMsQJ0ObnuCOLh6DQDs87u19GMLL8VvSDOOPbAqj3gio4Sdscb32W1MUTylk-WaPP81eN8QGAlCnhBGvLo4PZx_dxC8goRVIlQBcfQzqx2DmkBY0JDudIAcsne1dL7n_5yo3KgS93Ur6TbtzYNeJaYpg5hbJEnU1hQUC9xZxqEwc0vv7aRX417k5PTrDo3gukEcD9On5gefEmgFL7JoF8nXSL3YrchdpWpQwcfjFjTxI0YfuC94Ry-_LJB88XTHEeNLp2TUmA4ua2rgcpWdH38AzWzZdsMsH6TiPQeJvSSlnaEwob_Zxb4orZckcoqBde7MskJ-CdMFNp0PPwm51gV7tmzOuc2C6NDXt9uRd_uukuA1EhbaFmTxxkMOY9-Y4Ye1qWktu7XN7KbhPRK8VcKr5A2pADzhAdqol3yGmdurT-EKlhF4l8DMlfEJBLLJrrU-4G_JDkHRrSq-my0NCRSpJXnh6HLZfkqY3qXPZE_n6XsjEQEsCq4fd88SBsgdyhNDcrwo0AlCPEMK8I-IljtnRze4FI1bJR5bgxoviQgLkgu6evfqgnwY9HaNft2dwOs8DZ_MteKhmJ2a8S1HuTiicyHmeUSXO5OShTDO5m4JXF82Qa5wQmVY78ROgn1V65FBxEqcFOqd9kjhWdE9v-BmuHnqJbhFDb_HaodZaVALe2nO9dEgD7AucYmdz0LmHXpf_sqxvltHr5xGcuDAS69qMnwCy560YJ8943VPH2kqpLWSXdQcnP4-6npJBzz0lzkgrNnvBLpS4oj_L3tTOrAB4rYnInaIOOojg_6hpMhpBJD_2v5c2Apl0w4jn5-fnpQaX1Yh5XoehMbLtjgA3o_E1i145tdvgcFDC3UvhBTCrOIR6TgH8FgdHZWB-4sfKOeuoiXkA3qH1ll3RGOL3GgX1tqcaIid0L7vb91meyj087t3Z0OI8f9u41DL9spXudKDd4k-HFjkqCuY01WfdjSi1qbi--35Y16SQWzppIpQqQXcl8ybV8ey8eBguGD98Mx8o3NnH9Du6ACAkWjRl88hrl4DCsx1jPb__7jRgZYFT6caoBIqT2289DNiZ40JCBwGjFIPS"
    },{
      "key": "zqydurl4",
      "val": "https://kandian.wkandian.com/v3/article/lists.json?catid=0&op=0&behot_time=0&oid=0&video_catid=1453&access=4G&app_name=zqkd_app&app_version=3.5.5&carrier=CHN-UNICOM&channel=c4096&device_brand=samsung&device_id=55467832&device_model=SM-A7000&device_platform=android&device_type=android&dpi=480&inner_version=202108181034&language=zh-CN&memory=1&mi=0&mobile_type=1&net_type=2&network_type=4G&openudid=7c544a49ba475b24&os_api=23&os_version=MMB29M.A7000ZCU1CRC2&phone_sim=1&request_time=1639134428&resolution=1080x1920&rom_version=MMB29M.A7000ZCU1CRC2&s_ad=aFbVGOYyXwIo%3DJvDFs5ho7UL0dP6Rhkr3un2owLWm8I60J&s_im=m2JgR8oZr6IU%3DI1yfhfdIFfKlDHVEDb-8yQ%3D%3D&sm_device_id=20210913191348778e096e2230a8d6f60483126c18b696013b246616d64200&storage=11.78&uid=58964914&version_code=63&zqkey=MDAwMDAwMDAwMJCMpN-w09Wtg5-Bb36eh6CPqHualIejl7B1z2Sxp5-xhXyp4LDPyGl9onqkj3ZqYJa8Y898najWsJupZLDdn7GEjHbgrrmyapqGcXY&zqkey_id=2dd1e188838da6cf8c23df90b38bdd22&sign=3993d726803cf8f25a6181e1154f9314"
    },{
      "key": "zqydbody4",
      "val": "p=pUJybc31G2V0%3DvoWtRZZLNIRPNhwckmkQdyhJSIDwF2L02F_FSFAMBtrWj6nS_VuzRW8r6f3EaZcdZOoRldAOdLjMzHgJi-ZmjrDKbKCMsQJ0ObnuCOLh6DQDs87u19GMLL8VvSDOOPbAqj3gio4Sdscb32W1MUTylk-WaPP81eN8QGAlCnhBGvLo4PZx_dxC8goRVIlQBcfQzqx2DmkBY0JDudIAcsne1dL7n_5yo3KgS93Ur6TbtzYNeJaYpg5hbJEnU1hQUC9xK_ojaXhgir4ryVcplJHdFmFkTN33tz0oZiWP08HZ3rrpRFQ7BwqTDox0dj6nCcijgsmpiaoVrUp5A_GqNeLopAqulON7m_5nE5aDEhz3MK4CgauLhawNiYytuURcrMFcJ74q4hkR9_U3srlSAkx-18c_nnpL8DVWOGZ-IyxpzYAjReUfbMv_YMkpq5IOLhE01ZDq8PCpd-SbOoEkrfiftiuba8ktJryHZabA3GQ9cHs1cbb6YnLzZUrGZ88pCvhOQsrr3VQPOsjOUjChYcE-alIG-MF2OSuGfOk-kKTDtRVElPEOirBPcCdaZ3JqxtumsB1VFA3GlfNYiNAUlVWjr5Ksq5ugusOj_tO4pDLrnjKmKwHbW1zk5bShmjDdw1JUf-y2CvSmt2jaMbPa0iiPcOp2RHkCZbVLtB9oOozAd_91wQGsjHUt__LLV3cedI46osJERl3OdN9DZJazwf5J-lCOKxRgQnDo_12B1GXtos617sVHHLdDtjFQCDaAkeM77ByG0ua3BQSzI2-H7g9WLzUruRofEZz_m1mYJALX868JBaYFv4asQ19MWWpcGuKszFFG74g0tLP7Bfdw4BF_4MxPqQeBfD2vYnreol_q2ODg0jAe8r0IDW9c5WFJG7n8d4QflVR86qyfbpg4RqRCHGAJQ7FqxrlXRflxciIPOaFEwEZWxBh-Xc7hzVp3S3ey6RQjt8srlprFelZlRJk1N0qz-niO-WsJ0_oZz1JtydrjSTD9qExsOswR_6gGWkJN99wEKqfHaJBA7pY_QOgQqMaSyYJGbWhWxTCuxteZBtdliPs7Enj8FlfX2Ol0WLfGz1HV1x3otUiQuGfFWXeBkGuXuPG_hRX3kHwJe1PNVWSV2WdaLHKz5RTPIJoBm_zqxl-So-ywGh_udRmd4tccTQ==nc"
    },{
      "key": "zqydurl5",
      "val": "https://kandian.wkandian.com/v3/article/lists.json?catid=1453&op=0&behot_time=0&oid=0&video_catid=0&access=4G&app_name=zqkd_app&app_version=3.5.5&carrier=CHN-UNICOM&channel=c4096&device_brand=samsung&device_id=55467832&device_model=SM-A7000&device_platform=android&device_type=android&dpi=480&inner_version=202108181034&language=zh-CN&memory=1&mi=0&mobile_type=1&net_type=2&network_type=4G&openudid=7c544a49ba475b24&os_api=23&os_version=MMB29M.A7000ZCU1CRC2&phone_sim=1&request_time=1639112391&resolution=1080x1920&rom_version=MMB29M.A7000ZCU1CRC2&s_ad=PCWwRj3eGxCw%3DYt0q9SlgLn-QOacJUSZ6TE8n6ZmSagek&s_im=2CWwRj3eGxCw%3DkANSeLM_gV37-Mit4PdQXA%3D%3D&sm_device_id=20210913191348778e096e2230a8d6f60483126c18b696013b246616d64200&storage=11.78&uid=58964914&version_code=63&zqkey=MDAwMDAwMDAwMJCMpN-w09Wtg5-Bb36eh6CPqHualIejl7B1z2Sxp5-xhXyp4LDPyGl9onqkj3ZqYJa8Y898najWsJupZLDdn7GEjHbgrrmyapqGcXY&zqkey_id=2dd1e188838da6cf8c23df90b38bdd22&sign=4045a56cecbce6e0ad3da803a245d8c8"
    },{
      "key": "zqydbody5",
      "val": "p=HUJybc31G2V0%3DvoWtRZZLNIRPNhwckmkQdyhJSIDwF2L02F_FSFAMBtrWj6nS_VuzRW8r6f3EaZcdZOoRldAOdLj-Bleh2gvlYk2jW4nsCZlW2vzKiuBxu99G8idnNZUg3Gf6JaOsG3oqa6eeIibwh6wpBcWjrSZ9RmsLdFj4uaDdUrrRF_Ajaesjh1b_Ab24Hs4SndeRYoS46SysVjlCfOyHgoqMnZqHZV8lpvoS5QImS4EcYmsnggXVy4oo3zNZQ0Ltvt3Wbx8oVqeDQPEJLLee7z4FsjRNEdyFbz8HZ90Hzx4mbXwhKs47Un6lNG1QP3hq4-vJMKAUxFJceHiHzZdzvrtDTpHftXems1JAdZ6kzBknNJc14QdRtfapiCwbQgU0_dkMPYqeN0d9h1wuurlkhnrygVaNtmpNfYRl3Ic_44MfHl26bRdXZieqUV78TiN9C07FVkpulm_K0fuOQ5WXHexATSK6zWFvQghV6FOZaRVJ5l-fd5pwUvzgFdvD6t6wYhaHbwfHhkETbUR81XOXZKCZzwPCaCPsCaTatwcCWfN7rqXEJF72kZ5j_bZPR4Zy7Fmxm6Iv8KTOQjQ7yTJZdY3wjkos_U8KZ7pZu0z-TSy36tL2XfXE_tFZljgk5c2G2mS1OgJeVeksXu4SJRIKc3VBh-_-J_zA_MVYcfpIIfk8S1dbQjCUWNZHlKD-2t6ii8U0nqTFMtKvrcm4GE6dE6v7ZVI86AVNLwzrreBEsKY9cpSIZd3j3OvAfYPptdkCIowQvRd3EmrCrSRBxVy7IGdyShSGBJKAek0iB7knsqjYhZ5pvCiYOKRAld44WclJYQIt2w1gGHZWi3D0I6_cOnsxjcMFbqdsdWeFFzzcTzhefd5FqvY9kX8q_kwDG6H4CcIjESLeoO3DdP2zMrwz7ZimaB5RStOFCmcfjrECVRF1TO_xvqzA9G4kIInRCCPwmmiU9NipHu0g1dKXl5kvA1zRnOw7jtN0WvpaFcDKHIafkk-tkZy98rEd6Hh5_JkDGPM2iN3fQ6oE1FI-hs3iT-Db2dkRndgp1eQyThujPagTZe-3fuprJql5uRtoC1h0AioCSFsucRuOF8q_2JqovgcZuN78BFrxrHxTh12aXB7i1m5h-uSAuNnCc8i8qnBluH8Qzjou242z97wqPeQki-ILjRf27GoaTKd3jcMxTI"
    }],
    "sessions": [],
    "isLoaded": true
  }
