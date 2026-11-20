import React, { useState, useEffect } from 'react';
import {
CheckCircle,
XCircle,
Clock,
Search,
ShieldCheck,
LogOut,
RefreshCw,
Copy,
UserCheck,
Plus,
Edit3,
Check,
X,
RotateCcw,
} from 'lucide-react';

const PAYMENT_INFO = {
provider: 'Lipa Airtel Money',
lipaNumber: '327167685',
accountName: 'Lisa Agustino Maziku',
eventName: 'MCHANGO WA WELCOME FRESHERS 2026',
standardAmount: 30000,
};

const INITIAL_LEADERS = [
{ id: '1', listNo: '#1', name: 'CARLIN KIKOYO', title: 'Kiongozi', phone: '0700000001', status: 'Haajalipa', amountPaid: 0, lastRef: '', provider: 'Airtel Money' },
{ id: '2', listNo: '#2', name: 'MICHELLE NGOWI', title: 'Kiongozi', phone: '0700000002', status: 'Inasubiri Uhakiki', amountPaid: 50000, lastRef: 'AM-002', provider: 'Airtel Money' },
{ id: '3', listNo: '#3', name: 'JOHNSON BISHOTA', title: 'Kiongozi', phone: '0700000003', status: 'Inasubiri Uhakiki', amountPaid: 40000, lastRef: 'AM-003', provider: 'Airtel Money' },
{ id: '4', listNo: '#4', name: 'LISA AGUSTINO', title: 'Kiongozi', phone: '0700000004', status: 'Imethibitishwa', amountPaid: 30000, lastRef: 'AM-004-OK', provider: 'Airtel Money' },
{ id: '5', listNo: '#5', name: 'PATRON KAINJA', title: 'Kiongozi', phone: '0700000005', status: 'Inasubiri Uhakiki', amountPaid: 50000, lastRef: 'AM-005', provider: 'Airtel Money' },
{ id: '6', listNo: '#6', name: 'AGAPE MWANGA', title: 'Kiongozi', phone: '0700000006', status: 'Inasubiri Uhakiki', amountPaid: 50000, lastRef: 'AM-006', provider: 'Airtel Money' },
{ id: '7', listNo: '#7', name: 'GLORIA CLAUD', title: 'Kiongozi', phone: '0700000007', status: 'Inasubiri Uhakiki', amountPaid: 30000, lastRef: 'AM-007', provider: 'Airtel Money' },
{ id: '8', listNo: '#8', name: 'HAWA JONATHAN', title: 'Kiongozi', phone: '0700000008', status: 'Inasubiri Uhakiki', amountPaid: 30000, lastRef: 'AM-008', provider: 'Airtel Money' },
{ id: '9', listNo: '#9', name: 'BEATRICE CHIMWEGE', title: 'Kiongozi', phone: '0700000009', status: 'Inasubiri Uhakiki', amountPaid: 30000, lastRef: 'AM-009', provider: 'Airtel Money' },
{ id: '10', listNo: '#10', name: 'BAHATI BATALINGAYA', title: 'Kiongozi', phone: '0700000010', status: 'Imethibitishwa', amountPaid: 30000, lastRef: 'AM-010-OK', provider: 'Airtel Money' },
{ id: '11', listNo: '#11', name: 'PERUSE LEONARD', title: 'Kiongozi', phone: '0700000011', status: 'Inasubiri Uhakiki', amountPaid: 30000, lastRef: 'AM-011', provider: 'Airtel Money' },
{ id: '12', listNo: '#12', name: 'ELISHA ESSAU', title: 'Kiongozi', phone: '0700000012', status: 'Inasubiri Uhakiki', amountPaid: 30000, lastRef: 'AM-012', provider: 'Airtel Money' },
{ id: '13', listNo: '#13', name: 'AMPLIATUS FURAHISHA', title: 'Kiongozi', phone: '0700000013', status: 'Inasubiri Uhakiki', amountPaid: 30000, lastRef: 'AM-013', provider: 'Airtel Money' },
{ id: '14', listNo: '#14', name: 'MACHIMU SIMON', title: 'Kiongozi', phone: '0700000014', status: 'Inasubiri Uhakiki', amountPaid: 30000, lastRef: 'AM-014', provider: 'Airtel Money' },
{ id: '15', listNo: '#15', name: 'PETER MOLLEL', title: 'Kiongozi', phone: '0700000015', status: 'Inasubiri Uhakiki', amountPaid: 30000, lastRef: 'AM-015', provider: 'Airtel Money' },
{ id: '16', listNo: '#16', name: 'RUPIA DAVID', title: 'Kiongozi', phone: '0700000016', status: 'Inasubiri Uhakiki', amountPaid: 30000, lastRef: 'AM-016', provider: 'Airtel Money' },
{ id: '17', listNo: '#17', name: 'ADELINA B KIGOMBA', title: 'Kiongozi', phone: '0700000017', status: 'Inasubiri Uhakiki', amountPaid: 30000, lastRef: 'AM-017', provider: 'Airtel Money' },
{ id: '18', listNo: '#18', name: 'DONALD M KENEDY', title: 'Kiongozi', phone: '0700000018', status: 'Inasubiri Uhakiki', amountPaid: 30000, lastRef: 'AM-018', provider: 'Airtel Money' },
{ id: '19', listNo: '#19', name: 'ELTON MUSSA', title: 'Kiongozi', phone: '0700000019', status: 'Inasubiri Uhakiki', amountPaid: 30000, lastRef: 'AM-019', provider: 'Airtel Money' },
{ id: '20', listNo: '#20', name: 'CRETUS DIDAS', title: 'Kiongozi', phone: '0700000020', status: 'Inasubiri Uhakiki', amountPaid: 30000, lastRef: 'AM-020', provider: 'Airtel Money' },
{ id: '21', listNo: '#21', name: 'DILLA FRANK', title: 'Kiongozi', phone: '0700000021', status: 'Inasubiri Uhakiki', amountPaid: 30000, lastRef: 'AM-021', provider: 'Airtel Money' },
{ id: '22', listNo: '#22', name: 'AMANI ASHELY', title: 'Kiongozi', phone: '0700000022', status: 'Inasubiri Uhakiki', amountPaid: 30000, lastRef: 'AM-022', provider: 'Airtel Money' },
{ id: '23', listNo: '#23', name: 'ERICK NONDO', title: 'Kiongozi', phone: '0700000023', status: 'Inasubiri Uhakiki', amountPaid: 30000, lastRef: 'AM-023', provider: 'Airtel Money' },
{ id: '24', listNo: '#24', name: 'BIESHA NYUMAYO', title: 'Kiongozi', phone: '0700000024', status: 'Inasubiri Uhakiki', amountPaid: 30000, lastRef: 'AM-024', provider: 'Airtel Money' },
{ id: '25', listNo: '#25', name: 'ALLEN YOHANA', title: 'Kiongozi', phone: '0700000025', status: 'Inasubiri Uhakiki', amountPaid: 30000, lastRef: 'AM-025', provider: 'Airtel Money' },
{ id: '26', listNo: '#26', name: 'BARAKA SIMON', title: 'Kiongozi', phone: '0700000026', status: 'Inasubiri Uhakiki', amountPaid: 30000, lastRef: 'AM-026', provider: 'Airtel Money' },
{ id: '27', listNo: '#27', name: 'ABDALLA BAKARI', title: 'Kiongozi', phone: '0700000027', status: 'Inasubiri Uhakiki', amountPaid: 30000, lastRef: 'AM-027', provider: 'Airtel Money' },
{ id: '28', listNo: '#28', name: 'CLARA J MBOYA', title: 'Kiongozi', phone: '0700000028', status: 'Inasubiri Uhakiki', amountPaid: 30000, lastRef: 'AM-028', provider: 'Airtel Money' },
{ id: '29', listNo: '#29', name: 'DICKSON PAUL', title: 'Kiongozi', phone: '0700000029', status: 'Inasubiri Uhakiki', amountPaid: 30000, lastRef: 'AM-029', provider: 'Airtel Money' },
{ id: '30', listNo: '#30', name: 'EDSON JOVIN', title: 'Kiongozi', phone: '0700000030', status: 'Inasubiri Uhakiki', amountPaid: 30000, lastRef: 'AM-030', provider: 'Airtel Money' },
{ id: '31', listNo: '#32', name: 'AFIDHU ISSA', title: 'Kiongozi', phone: '0700000032', status: 'Inasubiri Uhakiki', amountPaid: 30000, lastRef: 'AM-032', provider: 'Airtel Money' },
{ id: '32', listNo: '#33', name: 'MAKWEBA M MAFURU', title: 'Kiongozi', phone: '0700000033', status: 'Inasubiri Uhakiki', amountPaid: 30000, lastRef: 'AM-033', provider: 'Airtel Money' },
{ id: '33', listNo: '#34', name: 'ALBERT OSWARD', title: 'Kiongozi', phone: '0700000034', status: 'Inasubiri Uhakiki', amountPaid: 30000, lastRef: 'AM-034', provider: 'Airtel Money' },
{ id: '34', listNo: '#35', name: 'KASSIM A ABDILLAH', title: 'Kiongozi', phone: '0700000035', status: 'Inasubiri Uhakiki', amountPaid: 30000, lastRef: 'AM-035', provider: 'Airtel Money' },
{ id: '35', listNo: '#36', name: 'JOFREY P. SIMKONDA', title: 'Kiongozi', phone: '0700000036', status: 'Inasubiri Uhakiki', amountPaid: 30000, lastRef: 'AM-036', provider: 'Airtel Money' },
{ id: '36', listNo: '#37', name: 'RACHAEL ELISHA', title: 'Kiongozi', phone: '0700000037', status: 'Inasubiri Uhakiki', amountPaid: 30000, lastRef: 'AM-037', provider: 'Airtel Money' },
{ id: '37', listNo: '#38', name: 'DEBORAH T ERRO', title: 'Kiongozi', phone: '0700000038', status: 'Inasubiri Uhakiki', amountPaid: 30000, lastRef: 'AM-038', provider: 'Airtel Money' },
{ id: '38', listNo: '#39', name: 'DERICK BENEDICT', title: 'Kiongozi', phone: '0700000039', status: 'Inasubiri Uhakiki', amountPaid: 30000, lastRef: 'AM-039', provider: 'Airtel Money' },
{ id: '39', listNo: '#40', name: 'IRIS JAMESIRIS', title: 'Kiongozi', phone: '0700000040', status: 'Inasubiri Uhakiki', amountPaid: 30000, lastRef: 'AM-040', provider: 'Airtel Money' },
{ id: '40', listNo: '#41', name: 'JOEL NOVATUS', title: 'Kiongozi', phone: '0700000041', status: 'Inasubiri Uhakiki', amountPaid: 30000, lastRef: 'AM-041', provider: 'Airtel Money' },
{ id: '41', listNo: '#42', name: 'ALBERT LUNGUYA', title: 'Kiongozi', phone: '0700000042', status: 'Inasubiri Uhakiki', amountPaid: 30000, lastRef: 'AM-042', provider: 'Airtel Money' },
{ id: '42', listNo: '#43', name: 'JOHNSON H.', title: 'Kiongozi', phone: '0700000043', status: 'Inasubiri Uhakiki', amountPaid: 30000, lastRef: 'AM-043', provider: 'Airtel Money' },
{ id: '43', listNo: '#44', name: 'NJILE MABULA', title: 'Kiongozi', phone: '0700000044', status: 'Inasubiri Uhakiki', amountPaid: 30000, lastRef: 'AM-044', provider: 'Airtel Money' },
{ id: '44', listNo: '#45', name: 'GODLIVING SAMBAYUKA', title: 'Kiongozi', phone: '0700000045', status: 'Inasubiri Uhakiki', amountPaid: 30000, lastRef: 'AM-045', provider: 'Airtel Money' },
{ id: '45', listNo: '#46', name: 'DERICK B. MALYA', title: 'Kiongozi', phone: '0700000046', status: 'Inasubiri Uhakiki', amountPaid: 30000, lastRef: 'AM-046', provider: 'Airtel Money' },
{ id: '46', listNo: '#47', name: 'ANGEL H. SAGENGE', title: 'Kiongozi', phone: '0700000047', status: 'Inasubiri Uhakiki', amountPaid: 30000, lastRef: 'AM-047', provider: 'Airtel Money' },
{ id: '47', listNo: '#48', name: 'MERCY MESHACK', title: 'Kiongozi', phone: '0700000048', status: 'Inasubiri Uhakiki', amountPaid: 30000, lastRef: 'AM-048', provider: 'Airtel Money' },
{ id: '48', listNo: '#49', name: 'VIOLETH KISSELA', title: 'Kiongozi', phone: '0700000049', status: 'Inasubiri Uhakiki', amountPaid: 30000, lastRef: 'AM-049', provider: 'Airtel Money' },
{ id: '49', listNo: '#50', name: 'MABOGO KULWA', title: 'Kiongozi', phone: '0700000050', status: 'Inasubiri Uhakiki', amountPaid: 30000, lastRef: 'AM-050', provider: 'Airtel Money' },
{ id: '50', listNo: '#51', name: 'DANNY EMMANUEL', title: 'Kiongozi', phone: '0700000051', status: 'Inasubiri Uhakiki', amountPaid: 30000, lastRef: 'AM-051', provider: 'Airtel Money' },
{ id: '51', listNo: '#52', name: 'RACHEL ELISHA', title: 'Kiongozi', phone: '0700000052', status: 'Inasubiri Uhakiki', amountPaid: 30000, lastRef: 'AM-052', provider: 'Airtel Money' },
{ id: '52', listNo: '#53', name: 'ABDULHAMID ABDUL', title: 'Kiongozi', phone: '0700000053', status: 'Inasubiri Uhakiki', amountPaid: 30000, lastRef: 'AM-053', provider: 'Airtel Money' },
{ id: '53', listNo: '#53b', name: 'COSTANTINE KELVIN', title: 'Kiongozi', phone: '0700000053', status: 'Inasubiri Uhakiki', amountPaid: 30000, lastRef: 'AM-053B', provider: 'Airtel Money' },
{ id: '54', listNo: '#54', name: 'KENEDY ZACHARIA', title: 'Kiongozi', phone: '0700000054', status: 'Inasubiri Uhakiki', amountPaid: 30000, lastRef: 'AM-054', provider: 'Airtel Money' },
{ id: '55', listNo: '#55', name: 'SEVELINE NYALILI', title: 'Kiongozi', phone: '0700000055', status: 'Inasubiri Uhakiki', amountPaid: 30000, lastRef: 'AM-055', provider: 'Airtel Money' },
{ id: '56', listNo: '#56', name: 'AGATHA NICODEM', title: 'Kiongozi', phone: '0700000056', status: 'Inasubiri Uhakiki', amountPaid: 30000, lastRef: 'AM-056', provider: 'Airtel Money' },
{ id: '57', listNo: '#57', name: 'MERY MAILOO', title: 'Kiongozi', phone: '0700000057', status: 'Inasubiri Uhakiki', amountPaid: 30000, lastRef: 'AM-057', provider: 'Airtel Money' },
{ id: '58', listNo: '#59', name: 'BAHATI BATALINGAYA', title: 'Kiongozi', phone: '0700000059', status: 'Inasubiri Uhakiki', amountPaid: 30000, lastRef: 'AM-059', provider: 'Airtel Money' },
{ id: '59', listNo: '#69', name: 'ROSE TANO', title: 'Kiongozi', phone: '0700000069', status: 'Inasubiri Uhakiki', amountPaid: 30000, lastRef: 'AM-069', provider: 'Airtel Money' },
{ id: '60', listNo: '#61', name: 'AKIBAR ABDALA', title: 'Kiongozi', phone: '0700000061', status: 'Inasubiri Uhakiki', amountPaid: 30000, lastRef: 'AM-061', provider: 'Airtel Money' },
{ id: '61', listNo: '#62', name: 'JOHNSON MWAMELO', title: 'Kiongozi', phone: '0700000062', status: 'Haajalipa', amountPaid: 0, lastRef: '', provider: 'Airtel Money' },
{ id: '62', listNo: '#63', name: 'JOSEPH ELIAS', title: 'Kiongozi', phone: '0700000063', status: 'Inasubiri Uhakiki', amountPaid: 30000, lastRef: 'AM-063', provider: 'Airtel Money' },
{ id: '63', listNo: '#64', name: 'PEMBA AMOS', title: 'Kiongozi', phone: '0700000064', status: 'Inasubiri Uhakiki', amountPaid: 30000, lastRef: 'AM-064', provider: 'Airtel Money' },
{ id: '64', listNo: '#65', name: 'EVENORA ELIUDY', title: 'Kiongozi', phone: '0700000065', status: 'Inasubiri Uhakiki', amountPaid: 30000, lastRef: 'AM-065', provider: 'Airtel Money' },
{ id: '65', listNo: '#66', name: 'KENEDY ZACHARIA', title: 'Kiongozi', phone: '0700000066', status: 'Inasubiri Uhakiki', amountPaid: 30000, lastRef: 'AM-066', provider: 'Airtel Money' },
{ id: '66', listNo: '#67', name: 'KEDISONI WILLISON', title: 'Kiongozi', phone: '0700000067', status: 'Inasubiri Uhakiki', amountPaid: 30000, lastRef: 'AM-067', provider: 'Airtel Money' },
{ id: '67', listNo: '#68', name: 'ANJELINA PARTICK', title: 'Kiongozi', phone: '0700000068', status: 'Inasubiri Uhakiki', amountPaid: 30000, lastRef: 'AM-068', provider: 'Airtel Money' },
{ id: '68', listNo: '#69b', name: 'JULIANA - MJUMBE', title: 'Mjumbe', phone: '0700000069', status: 'Inasubiri Uhakiki', amountPaid: 30000, lastRef: 'AM-069B', provider: 'Airtel Money' },
{ id: '69', listNo: '#70', name: 'ANSELMI MICHAEL', title: 'Kiongozi', phone: '0700000070', status: 'Inasubiri Uhakiki', amountPaid: 30000, lastRef: 'AM-070', provider: 'Airtel Money' },
{ id: '70', listNo: '#71', name: 'DINARLY - MJUMBE', title: 'Mjumbe', phone: '0700000071', status: 'Inasubiri Uhakiki', amountPaid: 30000, lastRef: 'AM-071', provider: 'Airtel Money' },
{ id: '71', listNo: '#72', name: 'RAJAB NTARAMBE', title: 'Kiongozi', phone: '0700000072', status: 'Inasubiri Uhakiki', amountPaid: 30000, lastRef: 'AM-072', provider: 'Airtel Money' },
{ id: '72', listNo: '#73', name: 'FREDY BATTY', title: 'Kiongozi', phone: '0700000073', status: 'Inasubiri Uhakiki', amountPaid: 30000, lastRef: 'AM-073', provider: 'Airtel Money' },
{ id: '73', listNo: '#74', name: 'KELVIN SIDI', title: 'Kiongozi', phone: '0700000074', status: 'Inasubiri Uhakiki', amountPaid: 30000, lastRef: 'AM-074', provider: 'Airtel Money' },
{ id: '74', listNo: '#75', name: 'MARANATHA', title: 'Kiongozi', phone: '0700000075', status: 'Inasubiri Uhakiki', amountPaid: 50000, lastRef: 'AM-075', provider: 'Airtel Money' },
{ id: '75', listNo: '#76', name: 'VIOLETH LIVING', title: 'Kiongozi', phone: '0700000076', status: 'Inasubiri Uhakiki', amountPaid: 30000, lastRef: 'AM-076', provider: 'Airtel Money' },
{ id: '76', listNo: '#77', name: 'Ireni Peter', title: 'Kiongozi', phone: '0700000077', status: 'Inasubiri Uhakiki', amountPaid: 30000, lastRef: 'AM-077', provider: 'Airtel Money' },
{ id: '77', listNo: '#78', name: 'Francis Daudi', title: 'Kiongozi', phone: '0700000078', status: 'Inasubiri Uhakiki', amountPaid: 30000, lastRef: 'AM-078', provider: 'Airtel Money' },
{ id: '78', listNo: '#79', name: 'Michael peter', title: 'Kiongozi', phone: '0700000079', status: 'Inasubiri Uhakiki', amountPaid: 30000, lastRef: 'AM-079', provider: 'Airtel Money' },
];

const INITIAL_TRANSACTIONS = [
{
id: 'TX-004',
leaderId: '4',
leaderName: 'LISA AGUSTINO',
title: 'Kiongozi',
refCode: 'AM-004-OK',
provider: 'Airtel Money',
senderPhone: '0700000004',
amount: 30000,
date: '2026-11-20 08:30',
status: 'Imethibitishwa',
notes: 'Imethibitishwa',
},
{
id: 'TX-010',
leaderId: '10',
leaderName: 'BAHATI BATALINGAYA',
title: 'Kiongozi',
refCode: 'AM-010-OK',
provider: 'Airtel Money',
senderPhone: '0700000010',
amount: 30000,
date: '2026-11-20 09:05',
status: 'Imethibitishwa',
notes: 'Imethibitishwa',
},
];

const PORTAL_PASSCODE = '2026';
const TREASURER_PIN = '1234';
const STORAGE_KEYS = {
LEADERS: 'wf_2026_leaders_v78',
TRANSACTIONS: 'wf_2026_transactions_v78',
};

export default function App() {
const [leaders, setLeaders] = useState(() => {
try {
const saved = localStorage.getItem(STORAGE_KEYS.LEADERS);
return saved ? JSON.parse(saved) : INITIAL_LEADERS;
} catch {
return INITIAL_LEADERS;
}
});

const [transactions, setTransactions] = useState(() => {
try {
const saved = localStorage.getItem(STORAGE_KEYS.TRANSACTIONS);
return saved ? JSON.parse(saved) : INITIAL_TRANSACTIONS;
} catch {
return INITIAL_TRANSACTIONS;
}
});

const [isPortalUnlocked, setIsPortalUnlocked] = useState(false);
const [portalPasscodeInput, setPortalPasscodeInput] = useState(PORTAL_PASSCODE);
const [passcodeError, setPasscodeError] = useState('');

const [activeTab, setActiveTab] = useState('leader');
const [selectedLeaderId, setSelectedLeaderId] = useState('');
const [toast, setToast] = useState(null);

const [treasurerPin, setTreasurerPin] = useState('');
const [treasurerAuthenticated, setTreasurerAuthenticated] = useState(false);
const [treasurerError, setTreasurerError] = useState('');

const [refCode, setRefCode] = useState('');
const [provider, setProvider] = useState('Airtel Money');
const [senderPhone, setSenderPhone] = useState('');
const [amount, setAmount] = useState(PAYMENT_INFO.standardAmount);
const [formSuccessMessage, setFormSuccessMessage] = useState('');
const [formErrorMessage, setFormErrorMessage] = useState('');

const [searchQuery, setSearchQuery] = useState('');
const [statusFilter, setStatusFilter] = useState('Wote');

const [newLeaderName, setNewLeaderName] = useState('');
const [newLeaderAmount, setNewLeaderAmount] = useState(0);
const [editingId, setEditingId] = useState(null);
const [editAmountValue, setEditAmountValue] = useState(0);

useEffect(() => {
try {
localStorage.setItem(STORAGE_KEYS.LEADERS, JSON.stringify(leaders));
} catch {}
}, [leaders]);

useEffect(() => {
try {
localStorage.setItem(STORAGE_KEYS.TRANSACTIONS, JSON.stringify(transactions));
} catch {}
}, [transactions]);

const showToast = (message) => {
setToast({ id: Date.now(), message });
setTimeout(() => {
setToast(null);
}, 3200);
};

const currentLeader = leaders.find((l) => l.id === selectedLeaderId);

useEffect(() => {
if (currentLeader) {
setSenderPhone(currentLeader.phone);
setAmount(
currentLeader.amountPaid > 0 && currentLeader.amountPaid < PAYMENT_INFO.standardAmount
? PAYMENT_INFO.standardAmount - currentLeader.amountPaid
: PAYMENT_INFO.standardAmount
);
}
}, [selectedLeaderId, currentLeader]);

const copyPayNumber = async () => {
try {
await navigator.clipboard.writeText(PAYMENT_INFO.lipaNumber);
showToast(Namba ${PAYMENT_INFO.lipaNumber} imenakiliwa.);
} catch {
showToast(Namba ya malipo: ${PAYMENT_INFO.lipaNumber});
}
};

const totalLeadersCount = leaders.length;
const totalCollected = leaders.reduce((acc, l) => acc + (Number(l.amountPaid) || 0), 0);
const confirmedLeadersCount = leaders.filter(
(l) => l.status.startsWith('Imethibitishwa') || (Number(l.amountPaid) || 0) >= PAYMENT_INFO.standardAmount
).length;
const unpaidCount = leaders.filter(
(l) => (Number(l.amountPaid) || 0) === 0 && l.status === 'Haajalipa'
).length;
const pendingTransactions = transactions.filter((t) => t.status === 'Inasubiri Uhakiki');
const totalPending = pendingTransactions.reduce((acc, curr) => acc + (Number(curr.amount) || 0), 0);

const handlePortalLogin = (e) => {
e.preventDefault();
const cleaned = portalPasscodeInput.trim().toUpperCase();
if (cleaned === PORTAL_PASSCODE || cleaned === 'FRESHERS') {
setIsPortalUnlocked(true);
setPasscodeError('');
setActiveTab('leader');
showToast('Karibu kwenye Portal ya Welcome Freshers 2026.');
} else {
setPasscodeError('Namba ya siri si sahihi. Tumia 2026 au FRESHERS.');
}
};

const handleOpenTreasurerTab = () => {
setActiveTab('treasurer');
if (!treasurerAuthenticated) {
setTreasurerPin('');
setTreasurerError('');
}
};

const handleTreasurerLogin = (e) => {
e.preventDefault();
if (treasurerPin.trim() === TREASURER_PIN) {
setTreasurerAuthenticated(true);
setTreasurerError('');
showToast('Umeingia kwenye dashibodi ya Mwekahadhina.');
} else {
setTreasurerError('PIN ya Mwekahadhina si sahihi. Tumia 1234.');
}
};

const handleLeaderSelect = (e) => {
setSelectedLeaderId(e.target.value);
setFormSuccessMessage('');
setFormErrorMessage('');
};

const handleSubmitPayment = (e) => {
e.preventDefault();
if (!selectedLeaderId || !currentLeader) {
setFormErrorMessage('Tafadhali chagua jina lako kwanza.');
return;
}
const cleanRef = refCode.trim().toUpperCase();
if (!cleanRef) {
setFormErrorMessage('Tafadhali weka reference ya muamala.');
return;
}
const numericAmount = Number(amount);
if (!numericAmount || numericAmount <= 0) {
setFormErrorMessage('Tafadhali weka kiasi halali cha mchango.');
return;
}

const newTx = {
  id: `TX-${Math.floor(100 + Math.random() * 900)}`,
  leaderId: currentLeader.id,
  leaderName: currentLeader.name,
  title: currentLeader.title,
  refCode: cleanRef,
  provider,
  senderPhone: senderPhone.trim() || currentLeader.phone,
  amount: numericAmount,
  date: new Date().toLocaleString('sv-SE').slice(0, 16),
  status: 'Inasubiri Uhakiki',
  notes: '',
};

setTransactions([newTx, ...transactions]);

setLeaders(
  leaders.map((l) => {
    if (l.id === currentLeader.id) {
      const nextAmount = (Number(l.amountPaid) || 0) + numericAmount;
      return {
        ...l,
        status: 'Inasubiri Uhakiki',
        amountPaid: nextAmount,
        lastRef: cleanRef,
        provider,
      };
    }
    return l;
  })
);

setFormSuccessMessage(`Reference (${cleanRef}) imetumwa. Inasubiri uhakiki.`);
setFormErrorMessage('');
setRefCode('');
showToast(`Reference ${cleanRef} imetumwa.`);


};

const handleApproveTransaction = (txId) => {
const tx = transactions.find((t) => t.id === txId);
if (!tx) return;

setTransactions(
  transactions.map((t) =>
    t.id === txId ? { ...t, status: 'Imethibitishwa', notes: 'Imethibitishwa' } : t
  )
);

setLeaders(
  leaders.map((l) => {
    if (l.id === tx.leaderId) {
      const currentPaid = Number(l.amountPaid) || 0;
      const updatedAmount = currentPaid > 0 ? currentPaid : tx.amount;
      return {
        ...l,
        status: 'Imethibitishwa',
        amountPaid: updatedAmount,
        lastRef: tx.refCode,
        provider: tx.provider,
      };
    }
    return l;
  })
);

showToast(`Muamala wa ${tx.leaderName} umethibitishwa.`);


};

const handleRejectTransaction = (txId) => {
const tx = transactions.find((t) => t.id === txId);
if (!tx) return;

setTransactions(
  transactions.map((t) =>
    t.id === txId ? { ...t, status: 'Imekataliwa', notes: 'Imekataliwa' } : t
  )
);

setLeaders(
  leaders.map((l) => {
    if (l.id === tx.leaderId) {
      return {
        ...l,
        status: l.amountPaid > 0 ? 'Imethibitishwa' : 'Haajalipa',
      };
    }
    return l;
  })
);

showToast(`Muamala wa ${tx.leaderName} umekataliwa.`);


};

const handleAddLeader = (e) => {
e.preventDefault();
if (!newLeaderName.trim()) return;
const nextNum = leaders.length + 1;
const amt = Number(newLeaderAmount) || 0;
const created = {
id: ${Date.now()},
listNo: #${nextNum},
name: newLeaderName.trim().toUpperCase(),
title: 'Kiongozi',
phone: '0700000000',
status: amt >= PAYMENT_INFO.standardAmount ? 'Imethibitishwa' : amt > 0 ? 'Inasubiri Uhakiki' : 'Haajalipa',
amountPaid: amt,
lastRef: '',
provider: 'Airtel Money',
};
setLeaders([...leaders, created]);
setNewLeaderName('');
setNewLeaderAmount(0);
showToast('Kiongozi mpya ameongezwa.');
};

const handleSaveLeaderEdit = (leaderId) => {
const val = Number(editAmountValue) || 0;
setLeaders(
leaders.map((l) => {
if (l.id === leaderId) {
return {
...l,
amountPaid: val,
status: val >= PAYMENT_INFO.standardAmount ? 'Imethibitishwa' : val > 0 ? 'Inasubiri Uhakiki' : 'Haajalipa',
};
}
return l;
})
);
setEditingId(null);
showToast('Kiasi kimesasishwa.');
};

const handleResetDemoData = () => {
setLeaders(INITIAL_LEADERS);
setTransactions(INITIAL_TRANSACTIONS);
setSelectedLeaderId('');
localStorage.removeItem(STORAGE_KEYS.LEADERS);
localStorage.removeItem(STORAGE_KEYS.TRANSACTIONS);
showToast('Orodha imerejeshwa kwenye hali ya awali.');
};

const filteredLeaders = leaders.filter((leader) => {
const matchesSearch =
leader.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
leader.listNo.toLowerCase().includes(searchQuery.toLowerCase()) ||
(leader.lastRef && leader.lastRef.toLowerCase().includes(searchQuery.toLowerCase()));
const matchesStatus =
statusFilter === 'Wote' ||
(statusFilter === 'Imethibitishwa' && leader.status.startsWith('Imethibitishwa')) ||
leader.status === statusFilter;
return matchesSearch && matchesStatus;
});

const renderStatusBadge = (status) => {
if (status.startsWith('Imethibitishwa')) {
return (


Imethibitishwa

);
}
if (status === 'Inasubiri Uhakiki') {
return (


Inasubiri

);
}
return (


Haajalipa

);
};

return (

{toast && (



{toast.message}


)}

  <header className="border-b sticky top-0 z-40 backdrop-blur-md bg-slate-900/90 border-slate-800">
    <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between gap-2">
      <div
        className="flex items-center space-x-3 cursor-pointer"
        onClick={() => isPortalUnlocked && setActiveTab('leader')}
      >
        <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-emerald-500 to-teal-400 flex items-center justify-center text-slate-950 font-black text-base shadow-lg">
          WF
        </div>
        <div>
          <h1 className="font-bold text-sm sm:text-base leading-tight">WELCOME FRESHERS 2026</h1>
          <p className="text-[11px] text-emerald-400 font-medium">
            {PAYMENT_INFO.provider}: {PAYMENT_INFO.lipaNumber}
          </p>
        </div>
      </div>

      {isPortalUnlocked && (
        <div className="flex items-center space-x-2">
          <div className="flex items-center p-1 rounded-xl border border-slate-800 bg-slate-950 text-xs font-semibold">
            <button
              onClick={() => setActiveTab('leader')}
              className={`px-2.5 py-1 rounded-lg transition ${
                activeTab === 'leader' ? 'bg-emerald-500 text-slate-950 font-bold' : 'text-slate-400'
              }`}
            >
              Viongozi
            </button>
            <button
              onClick={handleOpenTreasurerTab}
              className={`px-2.5 py-1 rounded-lg transition ${
                activeTab === 'treasurer' ? 'bg-teal-400 text-slate-950 font-bold' : 'text-slate-400'
              }`}
            >
              Mwekahadhina
            </button>
          </div>
          <button
            onClick={() => setIsPortalUnlocked(false)}
            className="p-2 rounded-lg bg-slate-800 hover:bg-rose-600 text-slate-300 hover:text-white transition"
            title="Toka"
          >
            <LogOut size={16} />
          </button>
        </div>
      )}
    </div>
  </header>

  <main className="max-w-7xl mx-auto px-4 py-6">
    {!isPortalUnlocked ? (
      <div className="max-w-md mx-auto py-10 space-y-5">
        <div className="text-center space-y-2">
          <h2 className="text-2xl font-black">WELCOME FRESHERS 2026</h2>
          <p className="text-xs text-slate-400">
            Portal ya Michango ya Viongozi • Kiwango: Tsh 30,000
          </p>
        </div>
        <form
          onSubmit={handlePortalLogin}
          className="space-y-4 bg-slate-900 p-6 rounded-2xl border border-slate-800 shadow-xl"
        >
          <div>
            <label className="block text-xs font-semibold text-slate-400 mb-1.5">
              Namba ya Siri ya Portal
            </label>
            <input
              type="text"
              value={portalPasscodeInput}
              onChange={(e) => setPortalPasscodeInput(e.target.value)}
              className="w-full p-3 bg-slate-950 border border-slate-700 rounded-xl text-center text-lg font-mono font-bold focus:outline-none focus:border-emerald-500"
              placeholder="2026"
            />
          </div>
          {passcodeError && <p className="text-xs text-rose-400 text-center">{passcodeError}</p>}
          <button
            type="submit"
            className="w-full py-3 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold rounded-xl transition"
          >
            Ingia Portal
          </button>
        </form>
      </div>
    ) : (
      <div className="space-y-6">
        <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-indigo-950 via-slate-900 to-emerald-950 border border-emerald-500/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <span className="text-[11px] font-bold text-emerald-400 uppercase tracking-wider">
              {PAYMENT_INFO.provider}
            </span>
            <p className="text-xl font-black font-mono text-white">{PAYMENT_INFO.lipaNumber}</p>
            <p className="text-xs text-slate-300">
              Jina la Mpokeaji: <strong>{PAYMENT_INFO.accountName}</strong>
            </p>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={copyPayNumber}
              className="px-3.5 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 text-xs font-bold flex items-center gap-1.5 transition"
            >
              <Copy size={14} /> Nakili Namba
            </button>
            <button
              onClick={handleResetDemoData}
              className="px-3 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-bold text-slate-200 flex items-center gap-1 transition"
            >
              <RefreshCw size={13} /> Rudisha
            </button>
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
          <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800">
            <span className="text-xs text-slate-400">Jumla Iliyolipwa</span>
            <p className="text-xl font-black text-emerald-400 mt-1">
              Tsh {totalCollected.toLocaleString()}
            </p>
          </div>
          <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800">
            <span className="text-xs text-slate-400">Inasubiri Uhakiki</span>
            <p className="text-xl font-black text-amber-400 mt-1">
              Tsh {totalPending.toLocaleString()}
            </p>
          </div>
          <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800">
            <span className="text-xs text-slate-400">Waliokamilisha</span>
            <p className="text-xl font-black text-teal-400 mt-1">
              {confirmedLeadersCount} / {totalLeadersCount}
            </p>
          </div>
          <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800">
            <span className="text-xs text-slate-400">Bado Hawajalipa</span>
            <p className="text-xl font-black text-rose-400 mt-1">{unpaidCount}</p>
          </div>
        </div>

        {activeTab === 'leader' ? (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            <div className="lg:col-span-5 bg-slate-900 p-5 rounded-2xl border border-slate-800 space-y-4 h-fit">
              <h3 className="font-bold text-base text-emerald-400 flex items-center gap-2">
                <UserCheck size={18} /> Chagua Jina Lako &amp; Tuma Ref
              </h3>

              <select
                value={selectedLeaderId}
                onChange={handleLeaderSelect}
                className="w-full p-3 rounded-xl bg-slate-950 border border-slate-700 text-xs font-semibold focus:outline-none focus:border-emerald-500"
              >
                <option value="">-- Chagua jina lako ({totalLeadersCount}) --</option>
                {leaders.map((l) => (
                  <option key={l.id} value={l.id}>
                    {l.listNo} {l.name}
                  </option>
                ))}
              </select>

              {currentLeader && (
                <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 text-xs flex items-center justify-between">
                  <div>
                    <p className="font-bold text-white">{currentLeader.name}</p>
                    <p className="text-slate-400">
                      Amelipa: Tsh {(Number(currentLeader.amountPaid) || 0).toLocaleString()}
                    </p>
                  </div>
                  {renderStatusBadge(currentLeader.status)}
                </div>
              )}

              <form onSubmit={handleSubmitPayment} className="space-y-3">
                <div>
                  <label className="block text-[11px] text-slate-400 mb-1">Mtandao</label>
                  <select
                    value={provider}
                    onChange={(e) => setProvider(e.target.value)}
                    className="w-full p-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs font-semibold"
                    disabled={!currentLeader}
                  >
                    <option value="Airtel Money">Airtel Money</option>
                    <option value="M-Pesa">M-Pesa</option>
                    <option value="Mixx by Yas">Mixx by Yas</option>
                    <option value="HaloPesa">HaloPesa</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] text-slate-400 mb-1">Kiasi (Tsh)</label>
                  <input
                    type="number"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    className="w-full p-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs font-bold"
                    disabled={!currentLeader}
                  />
                </div>

                <div>
                  <label className="block text-[11px] text-slate-400 mb-1">
                    Reference / Muamala ID
                  </label>
                  <input
                    type="text"
                    placeholder="Mfano: MP261120.1234.A12"
                    value={refCode}
                    onChange={(e) => setRefCode(e.target.value)}
                    className="w-full p-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs font-mono uppercase"
                    disabled={!currentLeader}
                  />
                </div>

                {formErrorMessage && (
                  <p className="text-xs text-rose-400 font-medium">{formErrorMessage}</p>
                )}
                {formSuccessMessage && (
                  <p className="text-xs text-emerald-400 font-medium">{formSuccessMessage}</p>
                )}

                <button
                  type="submit"
                  disabled={!currentLeader}
                  className="w-full py-3 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold rounded-xl text-xs disabled:opacity-40 transition"
                >
                  Tuma Reference
                </button>
              </form>
            </div>

            <div className="lg:col-span-7 bg-slate-900 p-5 rounded-2xl border border-slate-800 space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <h3 className="font-bold text-base">Orodha ya Michango ya Viongozi</h3>
                <div className="relative w-full sm:w-60">
                  <Search size={14} className="text-slate-400 absolute left-3 top-2.5" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Tafuta jina au ref..."
                    className="w-full pl-8 pr-3 py-1.5 rounded-xl bg-slate-950 border border-slate-800 text-xs"
                  />
                </div>
              </div>

              <div className="flex flex-wrap gap-1.5">
                {['Wote', 'Imethibitishwa', 'Inasubiri Uhakiki', 'Haajalipa'].map((st) => (
                  <button
                    key={st}
                    onClick={() => setStatusFilter(st)}
                    className={`px-3 py-1 rounded-lg text-xs font-semibold transition ${
                      statusFilter === st
                        ? 'bg-emerald-500 text-slate-950 font-bold'
                        : 'bg-slate-950 text-slate-400 border border-slate-800'
                    }`}
                  >
                    {st}
                  </button>
                ))}
              </div>

              <div className="space-y-2 max-h-[520px] overflow-y-auto pr-1">
                {filteredLeaders.map((l) => (
                  <div
                    key={l.id}
                    className="p-3 rounded-xl bg-slate-950 border border-slate-800/80 flex items-center justify-between text-xs gap-2"
                  >
                    <div>
                      <p className="font-bold text-white">
                        {l.listNo} {l.name}
                      </p>
                      <p className="text-[11px] text-slate-400 font-mono">
                        {l.lastRef || 'Hakuna Ref'}
                      </p>
                    </div>
                    <div className="text-right space-y-1">
                      <p className="font-black text-emerald-400">
                        Tsh {(Number(l.amountPaid) || 0).toLocaleString()}
                      </p>
                      {renderStatusBadge(l.status)}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ) : (
          <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800 space-y-6">
            {!treasurerAuthenticated ? (
              <form onSubmit={handleTreasurerLogin} className="max-w-xs mx-auto space-y-3 text-center">
                <ShieldCheck size={28} className="mx-auto text-teal-400" />
                <h3 className="font-bold text-sm">Ingia Dashibodi ya Mwekahadhina</h3>
                <input
                  type="password"
                  placeholder="PIN (1234)"
                  value={treasurerPin}
                  onChange={(e) => setTreasurerPin(e.target.value)}
                  className="w-full p-3 bg-slate-950 border border-slate-700 text-center rounded-xl font-mono text-sm"
                />
                {treasurerError && <p className="text-xs text-rose-400">{treasurerError}</p>}
                <button
                  type="submit"
                  className="w-full py-2.5 bg-teal-400 hover:bg-teal-300 text-slate-950 font-bold rounded-xl text-xs transition"
                >
                  Fungua Dashibodi
                </button>
              </form>
            ) : (
              <div className="space-y-6">
                <div className="space-y-3">
                  <h3 className="font-bold text-base text-amber-400">
                    Miamala Inayosubiri Uhakiki ({pendingTransactions.length})
                  </h3>
                  {pendingTransactions.length === 0 ? (
                    <p className="text-xs text-slate-400 bg-slate-950 p-4 rounded-xl border border-slate-800">
                      Hakuna muamala unaosubiri uhakiki kwa sasa.
                    </p>
                  ) : (
                    pendingTransactions.map((tx) => (
                      <div
                        key={tx.id}
                        className="p-3.5 bg-slate-950 border border-slate-800 rounded-xl flex flex-wrap items-center justify-between gap-3 text-xs"
                      >
                        <div>
                          <p className="font-bold text-white">{tx.leaderName}</p>
                          <p className="font-mono text-emerald-400">
                            {tx.refCode} ({tx.provider}) — Tsh {tx.amount.toLocaleString()}
                          </p>
                        </div>
                        <div className="flex gap-2">
                          <button
                            onClick={() => handleApproveTransaction(tx.id)}
                            className="px-3 py-1.5 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold rounded-lg transition"
                          >
                            Thibitisha
                          </button>
                          <button
                            onClick={() => handleRejectTransaction(tx.id)}
                            className="px-3 py-1.5 bg-rose-600 hover:bg-rose-500 text-white font-bold rounded-lg transition"
                          >
                            Kataa
                          </button>
                        </div>
                      </div>
                    ))
                  )}
                </div>

                <div className="space-y-3 pt-4 border-t border-slate-800">
                  <h4 className="font-bold text-sm text-white">Ongeza Kiongozi Mpya</h4>
                  <form onSubmit={handleAddLeader} className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <input
                      type="text"
                      value={newLeaderName}
                      onChange={(e) => setNewLeaderName(e.target.value)}
                      placeholder="Jina la kiongozi..."
                      className="p-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs"
                    />
                    <input
                      type="number"
                      value={newLeaderAmount}
                      onChange={(e) => setNewLeaderAmount(e.target.value)}
                      placeholder="Kiasi alicholipa (Tsh)"
                      className="p-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs"
                    />
                    <button
                      type="submit"
                      className="py-2.5 px-4 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs flex items-center justify-center gap-1.5"
                    >
                      <Plus size={15} /> Ongeza Kiongozi
                    </button>
                  </form>
                </div>

                <div className="space-y-2 pt-4 border-t border-slate-800">
                  <div className="flex items-center justify-between">
                    <h4 className="font-bold text-sm text-white">Hariri Kiasi cha Kiongozi</h4>
                    <button
                      onClick={handleResetDemoData}
                      className="text-xs text-slate-400 hover:text-white flex items-center gap-1"
                    >
                      <RotateCcw size={13} /> Rudisha Orodha
                    </button>
                  </div>
                  <div className="max-h-72 overflow-y-auto space-y-1.5 pr-1">
                    {leaders.map((l) => (
                      <div
                        key={l.id}
                        className="p-2.5 rounded-xl bg-slate-950 border border-slate-800/80 flex items-center justify-between text-xs gap-2"
                      >
                        <span className="font-semibold">
                          {l.listNo} {l.name}
                        </span>
                        {editingId === l.id ? (
                          <div className="flex items-center gap-1.5">
                            <input
                              type="number"
                              value={editAmountValue}
                              onChange={(e) => setEditAmountValue(e.target.value)}
                              className="w-24 px-2 py-1 rounded bg-slate-900 border border-slate-700 text-xs"
                            />
                            <button
                              onClick={() => handleSaveLeaderEdit(l.id)}
                              className="p-1 text-emerald-400 hover:bg-slate-800 rounded"
                            >
                              <Check size={15} />
                            </button>
                            <button
                              onClick={() => setEditingId(null)}
                              className="p-1 text-rose-400 hover:bg-slate-800 rounded"
                            >
                              <X size={15} />
                            </button>
                          </div>
                        ) : (
                          <div className="flex items-center gap-2">
                            <span className="font-bold text-emerald-400">
                              Tsh {(Number(l.amountPaid) || 0).toLocaleString()}
                            </span>
                            <button
                              onClick={() => {
                                setEditingId(l.id);
                                setEditAmountValue(l.amountPaid || 0);
                              }}
                              className="p-1 text-slate-400 hover:text-white rounded"
                              title="Badili kiasi"
                            >
                              <Edit3 size={13} />
                            </button>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    )}
  </main>
</div>


);
}
