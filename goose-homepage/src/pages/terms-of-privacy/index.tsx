function TermsOfPrivacy() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-20 text-black">
      <h1 className="mb-2 text-center text-3xl font-bold">
        lifegoose 개인정보 처리방침
      </h1>
      <p className="mb-10 text-center text-sm text-gray-600">
        시행일자: 2025년 5월 15일
      </p>

      <section className="space-y-6 text-sm leading-6">
        <div>
          <h2 className="font-semibold">
            제1조 (수집하는 개인정보 항목 및 수집 방법)
          </h2>
          <p className="mt-2 font-medium">수집 항목</p>
          <ul className="list-inside list-disc pl-4 text-gray-700">
            <li>
              <strong>회원가입 시</strong>
              <br />
              필수: 이름, 휴대전화번호, 이메일 주소, 생년월일, 비밀번호
              <br />
              선택: 프로필 사진, 가족 구성원 관계 정보
            </li>
            <li>
              <strong>서비스 이용 시 자동 수집</strong>
              <br />
              IP 주소, 쿠키, 접속 로그, 이용 기록, 기기정보(OS, 브라우저 정보
              등)
            </li>
          </ul>
          <p className="mt-2 font-medium">수집 방법</p>
          <ul className="list-inside list-disc pl-4 text-gray-700">
            <li>회원가입 및 서비스 이용 시 웹/모바일 화면을 통해 수집</li>
            <li>고객센터 문의, 이벤트 응모 시 수집</li>
            <li>자동 수집 도구(쿠키 등)를 통한 정보 수집</li>
          </ul>
        </div>

        <div>
          <h2 className="font-semibold">
            제2조 (개인정보의 수집 및 이용 목적)
          </h2>
          <table className="mt-2 w-full border border-gray-400 text-left text-sm text-black">
            <thead>
              <tr className="bg-gray-50">
                <th className="border p-2">목적</th>
                <th className="border p-2">세부 내용</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border p-2">회원 관리</td>
                <td className="border p-2">
                  본인 확인, 가입 의사 확인, 계정관리, 불량 이용자 제재 등
                </td>
              </tr>
              <tr>
                <td className="border p-2">서비스 제공</td>
                <td className="border p-2">
                  가족 커뮤니티, 채팅, 일정관리 기능 제공
                </td>
              </tr>
              <tr>
                <td className="border p-2">맞춤형 서비스</td>
                <td className="border p-2">
                  선호도 기반 콘텐츠 추천, 가족 구성원 기반 알림 제공
                </td>
              </tr>
              <tr>
                <td className="border p-2">고객 응대</td>
                <td className="border p-2">민원 처리, 문의 응대 등</td>
              </tr>
              <tr>
                <td className="border p-2">마케팅</td>
                <td className="border p-2">
                  이벤트, 프로모션 안내 (동의한 경우에 한함)
                </td>
              </tr>
              <tr>
                <td className="border p-2">법적 의무 이행</td>
                <td className="border p-2">관계 법령에 따른 보관, 통지 등</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div>
          <h2 className="font-semibold">
            제3조 (개인정보의 보유 및 이용 기간)
          </h2>
          <p className="text-gray-700">
            회사는 개인정보 수집 및 이용 목적이 달성된 후에는 해당 정보를 지체
            없이 파기합니다. 단, 다음의 정보는 명시된 기간 동안 보존됩니다.
          </p>
          <table className="mt-2 w-full border border-gray-400 text-left text-sm text-black">
            <thead>
              <tr className="bg-gray-50">
                <th className="border p-2">보존 항목</th>
                <th className="border p-2">보존 기간</th>
                <th className="border p-2">관련 법령</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border p-2">
                  계약 또는 청약 철회 등에 관한 기록
                </td>
                <td className="border p-2">5년</td>
                <td className="border p-2">전자상거래법</td>
              </tr>
              <tr>
                <td className="border p-2">
                  대금 결제 및 재화 등의 공급에 관한 기록
                </td>
                <td className="border p-2">5년</td>
                <td className="border p-2">전자상거래법</td>
              </tr>
              <tr>
                <td className="border p-2">
                  소비자 불만 또는 분쟁처리에 관한 기록
                </td>
                <td className="border p-2">3년</td>
                <td className="border p-2">전자상거래법</td>
              </tr>
              <tr>
                <td className="border p-2">접속 로그, 접속 IP 정보</td>
                <td className="border p-2">3개월</td>
                <td className="border p-2">통신비밀보호법</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div>
          <h2 className="font-semibold">제4조 (개인정보의 제3자 제공)</h2>
          <p className="text-gray-700">
            회사는 원칙적으로 이용자의 개인정보를 외부에 제공하지 않습니다. 단,
            아래의 경우 예외로 합니다.
          </p>
          <ul className="list-inside list-disc pl-4 text-gray-700">
            <li>이용자가 사전에 동의한 경우</li>
            <li>법령에 따라 제출 의무가 있는 경우</li>
            <li>
              서비스 제공을 위해 불가피하게 필요한 경우 (가족 구성원 간 일정
              공유 등)
            </li>
          </ul>
        </div>

        <div>
          <h2 className="font-semibold">제5조 (개인정보 처리의 위탁)</h2>
          <p className="text-gray-700">
            회사는 서비스 제공을 위하여 아래와 같이 개인정보 처리를 위탁할 수
            있습니다.
          </p>
          <table className="mt-2 w-full border border-gray-400 text-left text-sm text-black">
            <thead>
              <tr className="bg-gray-50">
                <th className="border p-2">수탁자</th>
                <th className="border p-2">위탁 업무 내용</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border p-2">AWS (Amazon Web Services)</td>
                <td className="border p-2">데이터 저장, 인프라 운영</td>
              </tr>
              <tr>
                <td className="border p-2">문자/이메일 발송 대행사</td>
                <td className="border p-2">알림 메시지 전송, 본인 인증</td>
              </tr>
            </tbody>
          </table>
          <p className="mt-1 text-xs text-gray-500">
            ※ 위탁계약 시 개인정보 보호에 관한 법령을 준수하며, 수탁자에 대한
            감독을 철저히 합니다.
          </p>
        </div>

        <div>
          <h2 className="font-semibold">제6조 (이용자의 권리와 행사 방법)</h2>
          <ul className="list-inside list-disc pl-4 text-gray-700">
            <li>개인정보 열람 요청</li>
            <li>정정 및 삭제 요청</li>
            <li>처리 정지 요청</li>
            <li>동의 철회 및 회원탈퇴</li>
          </ul>
          <p className="mt-2 text-gray-700">
            ▶ 행사 방법: 앱 내 설정 또는 고객센터를 통해 요청
          </p>
        </div>

        <div>
          <h2 className="font-semibold">제7조 (개인정보의 파기절차 및 방법)</h2>
          <p className="mt-1 font-medium text-gray-700">파기절차</p>
          <p className="text-gray-700">
            목적 달성 후 내부 방침 및 관련 법령에 따라 일정 기간 저장 후
            파기됩니다.
          </p>
          <p className="mt-2 font-medium text-gray-700">파기방법</p>
          <ul className="list-inside list-disc pl-4 text-gray-700">
            <li>전자파일: 복구 불가능한 방식으로 삭제</li>
            <li>출력물: 분쇄 또는 소각</li>
          </ul>
        </div>

        <div>
          <h2 className="font-semibold">
            제8조 (개인정보 자동 수집 장치의 설치·운영 및 거부)
          </h2>
          <ul className="list-inside list-disc pl-4 text-gray-700">
            <li>사용 목적: 로그인 유지, 맞춤형 정보 제공</li>
            <li>
              거부 방법: 웹 브라우저 설정 &gt; 개인정보 설정 &gt; 쿠키 저장 거부
              설정 가능
            </li>
          </ul>
        </div>

        <div>
          <h2 className="font-semibold">제9조 (개인정보의 안전성 확보 조치)</h2>
          <ul className="list-inside list-disc pl-4 text-gray-700">
            <li>개인정보 암호화 저장 및 전송</li>
            <li>접근 권한 최소화 및 정기 점검</li>
            <li>침입 차단 시스템 및 보안 서버 운영</li>
            <li>내부 개인정보 보호 교육 정기 시행</li>
          </ul>
        </div>

        <div>
          <h2 className="font-semibold">제10조 (개인정보 보호책임자)</h2>
          <p className="text-gray-700">
            책임자: OOO
            <br />
            이메일:{' '}
            <a
              href="mailto:support@lifegoose.co.kr"
              className="text-black underline"
            >
              support@lifegoose.co.kr
            </a>
            <br />
            고객센터: 앱 내 고객지원 메뉴 이용
          </p>
        </div>

        <div>
          <h2 className="font-semibold">제11조 (정책 변경 고지)</h2>
          <p className="text-gray-700">
            이 개인정보 처리방침은 법령 또는 서비스 정책 변경에 따라 수정될 수
            있으며, 개정 시 앱 내 공지사항 또는 이메일을 통해 사전 고지합니다.
          </p>
        </div>
      </section>
    </div>
  )
}

export default TermsOfPrivacy
