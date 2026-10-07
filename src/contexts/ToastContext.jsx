import React, { createContext, useContext, useState, useCallback } from 'react';
import styled, { keyframes } from 'styled-components';
import { CheckCircle2, ShoppingBag, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const ToastContext = createContext(null);

const slideIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px) scale(0.95);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
`;

const ToastWrapper = styled.div`
  position: fixed;
  bottom: 24px;
  right: 24px;
  z-index: 9999;
  display: flex;
  flex-direction: column;
  gap: 12px;
  max-width: 420px;
  width: calc(100vw - 32px);
  pointer-events: none;
`;

const ToastCard = styled.div`
  pointer-events: auto;
  animation: ${slideIn} 0.35s cubic-bezier(0.16, 1, 0.3, 1) forwards;
  background: rgba(255, 255, 255, 0.92);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.6);
  border-radius: 18px;
  padding: 14px 18px;
  box-shadow: 
    0 20px 40px -15px rgba(0, 0, 0, 0.15),
    0 0 0 1px rgba(59, 130, 246, 0.15),
    0 8px 16px -4px rgba(59, 130, 246, 0.1);
  display: flex;
  align-items: center;
  gap: 14px;
  color: #0f172a;
  transition: all 0.25s ease;

  html[data-theme='dark'] & {
    background: rgba(15, 23, 42, 0.92);
    border: 1px solid rgba(255, 255, 255, 0.12);
    color: #f8fafc;
    box-shadow: 
      0 20px 40px -15px rgba(0, 0, 0, 0.5),
      0 0 0 1px rgba(99, 102, 241, 0.25),
      0 8px 24px -4px rgba(99, 102, 241, 0.2);
  }

  &:hover {
    transform: translateY(-2px);
  }
`;

const ToastImage = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 12px;
  object-fit: cover;
  background: #f1f5f9;
  border: 1px solid rgba(0, 0, 0, 0.05);
  flex-shrink: 0;

  html[data-theme='dark'] & {
    background: #1e293b;
    border-color: rgba(255, 255, 255, 0.1);
  }
`;

const ToastIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #10b981, #059669);
  color: white;
  flex-shrink: 0;
  box-shadow: 0 4px 12px rgba(16, 185, 129, 0.35);
`;

const ToastContent = styled.div`
  flex: 1;
  min-width: 0;
`;

const ToastTitle = styled.div`
  font-size: 0.85rem;
  font-weight: 700;
  color: #10b981;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  display: flex;
  align-items: center;
  gap: 6px;
  margin-bottom: 2px;

  html[data-theme='dark'] & {
    color: #34d399;
  }
`;

const ToastMessage = styled.div`
  font-size: 0.92rem;
  font-weight: 600;
  color: #1e293b;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  html[data-theme='dark'] & {
    color: #f1f5f9;
  }
`;

const ViewCartBtn = styled.button`
  background: linear-gradient(135deg, #3b82f6, #2563eb);
  color: white;
  border: none;
  padding: 8px 14px;
  border-radius: 10px;
  font-size: 0.8rem;
  font-weight: 600;
  cursor: pointer;
  white-space: nowrap;
  transition: all 0.2s ease;
  box-shadow: 0 4px 10px rgba(59, 130, 246, 0.3);

  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 6px 16px rgba(59, 130, 246, 0.45);
  }

  &:active {
    transform: scale(0.96);
  }
`;

const CloseBtn = styled.button`
  background: transparent;
  border: none;
  color: #94a3b8;
  cursor: pointer;
  padding: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  transition: all 0.2s ease;

  &:hover {
    color: #475569;
    background: rgba(0, 0, 0, 0.05);
  }

  html[data-theme='dark'] &:hover {
    color: #e2e8f0;
    background: rgba(255, 255, 255, 0.1);
  }
`;

export const ToastProvider = ({ children }) => {
  const [toasts, setToasts] = useState([]);

  const removeToast = useCallback((id) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  const showToast = useCallback((toast) => {
    const id = Date.now() + Math.random().toString(36).substring(2, 6);
    const newToast = { id, ...toast };
    setToasts((prev) => [...prev.slice(-3), newToast]);

    setTimeout(() => {
      removeToast(id);
    }, toast.duration || 3500);
  }, [removeToast]);

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      <ToastWrapper>
        {toasts.map((toast) => (
          <ToastItem key={toast.id} toast={toast} onClose={() => removeToast(toast.id)} />
        ))}
      </ToastWrapper>
    </ToastContext.Provider>
  );
};

const ToastItem = ({ toast, onClose }) => {
  const navigate = useNavigate();

  return (
    <ToastCard>
      {toast.image ? (
        <ToastImage src={toast.image} alt={toast.title || ''} />
      ) : (
        <ToastIcon>
          <CheckCircle2 size={22} />
        </ToastIcon>
      )}

      <ToastContent>
        <ToastTitle>
          <CheckCircle2 size={14} />
          {toast.heading || 'Success'}
        </ToastTitle>
        <ToastMessage>{toast.message || 'Action completed!'}</ToastMessage>
      </ToastContent>

      {toast.showCartButton && (
        <ViewCartBtn
          onClick={() => {
            onClose();
            navigate('/cart');
          }}
        >
          View Cart
        </ViewCartBtn>
      )}

      <CloseBtn onClick={onClose} aria-label="Close notification">
        <X size={16} />
      </CloseBtn>
    </ToastCard>
  );
};

export const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) {
    return {
      showToast: (opts) => console.log('Toast:', opts)
    };
  }
  return context;
};
